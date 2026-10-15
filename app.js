/* Amiira Beauty — gallery, lightbox, booking. No external libraries. */
(() => {
  const BASE = window.ASSET_BASE || "";
  const RAW = window.AMIIRA_PORTFOLIO || { makeup: [], hair: [], henna: [] };
  const BATCH = 18;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover)").matches;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- data ---------- */
  const cats = ["henna", "makeup", "hair"];
  const items = [];
  cats.forEach((c) => (RAW[c] || []).forEach((it) => items.push({ ...it, cat: c, url: BASE + it.src })));
  const isReal = (i) => i.source === "real";

  function interleave(list) {
    const by = Object.fromEntries(cats.map((c) => [c, list.filter((i) => i.cat === c)]));
    const out = [];
    for (let n = 0; out.length < list.length; n++) cats.forEach((c) => by[c][n] && out.push(by[c][n]));
    return out;
  }
  // real work first (mixed across categories), AI inspiration after
  const ordered = [...interleave(items.filter(isReal)), ...interleave(items.filter((i) => !isReal(i)))];

  /* ---------- static bits ---------- */
  $$("[data-asset]").forEach((img) => { img.src = BASE + img.dataset.asset; });
  $("#statReal").textContent = items.filter(isReal).length;
  $("#statHenna").textContent = items.filter((i) => i.cat === "henna" && i.type === "video" && isReal(i)).length;

  const lazyVideo = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting) {
        if (!v.src && v.dataset.src) v.src = v.dataset.src;
        if (v.dataset.auto === "1" && !reduce) v.play().catch(() => {});
      } else if (v.dataset.auto === "1") v.pause();
    });
  }, { rootMargin: "200px" });

  [["henna", ".b1"], ["makeup", ".b2"]].forEach(([cat, sel]) => {
    const v = $(sel);
    const it = items.find((i) => i.cat === cat && i.type === "video" && isReal(i));
    if (!v || !it) { v && v.remove(); return; }
    v.dataset.src = it.url + "#t=0.5";
    v.dataset.auto = "1";
    lazyVideo.observe(v);
  });

  /* ---------- gallery ---------- */
  const state = { filter: "all", real: true, shown: BATCH };
  const grid = $("#grid");
  const moreBtn = $("#moreBtn");
  let visible = [];

  function compute() {
    visible = ordered.filter((i) => (state.filter === "all" || i.cat === state.filter) && (!state.real || isReal(i)));
    if (!visible.length) visible = ordered.filter((i) => state.filter === "all" || i.cat === state.filter); // no real items in this tab yet
  }

  function tile(it, index) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "tile " + (index % 5 === 0 ? "tall" : index % 3 === 0 ? "wide" : "");
    b.dataset.index = index;
    const label = t(it.cat === "hair" ? "work.hair" : it.cat === "henna" ? "work.henna" : "work.makeup");
    b.setAttribute("aria-label", `${label} — ${t(isReal(it) ? "badge.real" : "badge.ai")}`);
    let media;
    if (it.type === "video") {
      media = document.createElement("video");
      media.muted = true; media.loop = true; media.playsInline = true; media.preload = "none";
      media.dataset.src = it.url + "#t=0.5";
      media.setAttribute("aria-hidden", "true");
      lazyVideo.observe(media);
      if (canHover && !reduce) {
        b.addEventListener("pointerenter", () => media.play().catch(() => {}));
        b.addEventListener("pointerleave", () => { media.pause(); });
      }
    } else {
      media = document.createElement("img");
      media.src = it.url; media.alt = ""; media.loading = "lazy"; media.decoding = "async";
    }
    media.className = "tile-media";
    const badge = document.createElement("span");
    badge.className = "badge " + (isReal(it) ? "real" : "ai");
    badge.textContent = t(isReal(it) ? "badge.real" : "badge.ai");
    badge.dataset.k = isReal(it) ? "badge.real" : "badge.ai";
    b.append(media, badge);
    if (it.type === "video") { const p = document.createElement("span"); p.className = "playdot"; p.setAttribute("aria-hidden", "true"); p.textContent = "▶"; b.append(p); }
    b.addEventListener("click", () => openLightbox(index));
    return b;
  }

  function render(reset = true) {
    if (reset) { compute(); grid.replaceChildren(); state.rendered = 0; }
    const upto = Math.min(state.shown, visible.length);
    for (let i = state.rendered; i < upto; i++) grid.append(tile(visible[i], i));
    state.rendered = upto;
    moreBtn.hidden = upto >= visible.length;
    $("#workCount").textContent = t("work.count", { n: visible.length });
  }

  $$(".tab").forEach((tab) => tab.addEventListener("click", () => setFilter(tab.dataset.filter)));
  function setFilter(f) {
    state.filter = f; state.shown = BATCH;
    $$(".tab").forEach((x) => x.setAttribute("aria-selected", String(x.dataset.filter === f)));
    render();
  }
  $$(".svc-link").forEach((a) => a.addEventListener("click", () => setFilter(a.dataset.filter)));
  $("#realOnly").addEventListener("change", (e) => { state.real = e.target.checked; state.shown = BATCH; render(); });
  moreBtn.addEventListener("click", () => { state.shown += BATCH; render(false); });
  document.addEventListener("amiira:lang", () => {
    $$(".badge", grid).forEach((b) => { b.textContent = t(b.dataset.k); });
    $("#workCount").textContent = t("work.count", { n: visible.length });
  });

  /* ---------- lightbox ---------- */
  const lb = $("#lightbox"), stage = $("#lbStage"), cap = $("#lbCap");
  let cur = 0;
  function show(i) {
    cur = (i + visible.length) % visible.length;
    const it = visible[cur];
    stage.replaceChildren();
    let m;
    if (it.type === "video") { m = document.createElement("video"); m.src = it.url; m.controls = true; m.autoplay = true; m.loop = true; m.playsInline = true; }
    else { m = document.createElement("img"); m.src = it.url; m.alt = ""; }
    stage.append(m);
    const label = t(it.cat === "hair" ? "work.hair" : it.cat === "henna" ? "work.henna" : "work.makeup");
    cap.textContent = `${label} · ${t(isReal(it) ? "badge.real" : "badge.ai")} · ${cur + 1}/${visible.length}`;
    const a = document.createElement("a");
    a.className = "lb-book"; a.target = "_blank"; a.rel = "noopener noreferrer";
    a.textContent = t("lb.book");
    a.href = "https://wa.me/905525774487?text=" + encodeURIComponent(t("lb.msg", { service: label }));
    cap.append(" ", a);
  }
  function openLightbox(i) { if (!lb.showModal) return; show(i); lb.showModal(); document.body.classList.add("noscroll"); }
  function closeLightbox() { stage.replaceChildren(); document.body.classList.remove("noscroll"); }
  $("#lbClose").addEventListener("click", () => lb.close());
  $("#lbPrev").addEventListener("click", () => show(cur - 1));
  $("#lbNext").addEventListener("click", () => show(cur + 1));
  lb.addEventListener("close", closeLightbox);
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", (e) => {
    const rtl = document.documentElement.dir === "rtl";
    if (e.key === "ArrowRight") show(cur + (rtl ? -1 : 1));
    if (e.key === "ArrowLeft") show(cur + (rtl ? 1 : -1));
  });
  let sx = 0;
  stage.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 60) show(cur + (dx < 0 ? 1 : -1)); });

  /* ---------- booking → WhatsApp ---------- */
  $("#bookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const clean = (s) => String(s || "").replace(/\s+/g, " ").trim();
    const name = clean(f.get("name")), notes = clean(f.get("notes")), date = clean(f.get("date"));
    const service = t("svc." + f.get("service"));
    const text = t("book.msg", {
      service,
      date: date ? t("book.msg.date", { v: date }) : "",
      name: name ? t("book.msg.name", { v: name }) : "",
      notes: notes ? t("book.msg.notes", { v: notes }) : "",
    });
    window.open("https://wa.me/905525774487?text=" + encodeURIComponent(text), "_blank", "noopener");
  });

  render();
})();
