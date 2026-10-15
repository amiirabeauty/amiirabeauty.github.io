/* Amiira Beauty — language layer (EN / SO / AR / TR). Keys live in index.html as data-i18n. */
(() => {
  const T = {
    en: {
      "nav.home": "Home", "nav.services": "Services", "nav.work": "Work", "nav.book": "Book", "nav.contact": "Contact",
      "hero.eyebrow": "Makeup · Hair · Henna",
      "hero.t1": "Every story", "hero.t2": "begins with a hand",
      "hero.text": "Makeup, hair styling and henna crafted with care, elegance and a feminine touch.",
      "hero.cta1": "See the work", "hero.cta2": "Book on WhatsApp",
      "stat.real": "real works shown", "stat.henna": "henna videos", "stat.hours": "Mon – Sat",
      "marquee": "Makeup · Hair Styling · Henna ·",
      "svc.eyebrow": "What we do", "svc.title": "Beauty, made by hand",
      "svc.makeup": "Makeup", "svc.hair": "Hair Styling", "svc.henna": "Henna",
      "svc.makeup.d": "Elegant, soft and glamorous makeup looks for your special moments.",
      "svc.hair.d": "Beautiful hairstyles created to complete your perfect look.",
      "svc.henna.d": "Detailed and elegant henna designs created with an artistic feminine touch.",
      "svc.see": "See the work",
      "work.eyebrow": "Lookbook", "work.title": "Our work",
      "work.all": "All", "work.makeup": "Makeup", "work.hair": "Hair", "work.henna": "Henna",
      "work.realOnly": "Real work only",
      "work.more": "Show more", "work.count": "{n} works",
      "badge.real": "Real work", "badge.ai": "AI inspiration",
      "work.note": "Items marked “AI inspiration” are images created to complement Amiira Beauty’s real portfolio.",
      "how.eyebrow": "How it works", "how.title": "Three simple steps",
      "how.1.t": "Choose your look", "how.1.d": "Browse the work, pick a style you love, or tell us your own idea.",
      "how.2.t": "Message us", "how.2.d": "Send the booking form or WhatsApp us your date and details.",
      "how.3.t": "Enjoy your day", "how.3.d": "We confirm the time, and you leave feeling beautiful.",
      "faq.eyebrow": "Good to know", "faq.title": "Questions, answered",
      "faq.q1": "How long does henna last?", "faq.a1": "Usually about one to two weeks. It depends on your skin, where it is applied and how you care for it afterwards.",
      "faq.q2": "How early should I book for a wedding or Eid?", "faq.a2": "As early as you can, because popular dates fill up. Message us on WhatsApp with your date and we will confirm availability.",
      "faq.q3": "Which services do you offer?", "faq.a3": "Makeup, hair styling and henna. You can combine them for one special occasion.",
      "faq.q4": "Can you come to my home or venue?", "faq.a4": "Please ask us on WhatsApp. It depends on the date and the location.",
      "faq.q5": "How do I book?", "faq.a5": "Use the form on this page or message us on WhatsApp at +90 552 577 44 87, Monday to Saturday, 08:00 – 20:00.",
      "nav.faq": "FAQ", "lb.book": "Book this look →", "lb.msg": "Hello Amiira Beauty, I would like to book a style like this: {service}.", "lb.close": "Close", "lb.prev": "Previous", "lb.next": "Next",
      "book.eyebrow": "Book your appointment", "book.title": "Tell us what you have in mind",
      "book.text": "Fill this in and WhatsApp opens with your message ready. Nothing is stored on this site.",
      "book.name": "Your name", "book.service": "Service", "book.date": "Preferred date", "book.notes": "Notes (occasion, style…)",
      "book.send": "Send on WhatsApp",
      "book.msg": "Hello Amiira Beauty! I would like to book: {service}.{date}{name}{notes}",
      "book.msg.date": " Preferred date: {v}.", "book.msg.name": " My name: {v}.", "book.msg.notes": " Notes: {v}",
      "follow.eyebrow": "Follow along", "follow.title": "More henna and makeup on TikTok", "follow.btn": "Open TikTok",
      "contact.eyebrow": "Contact", "contact.title": "We would love to hear from you",
      "contact.text": "Contact Amiira Beauty directly on WhatsApp for appointments and availability.",
      "contact.wa": "WhatsApp", "contact.days": "Working days", "contact.daysV": "Monday – Saturday",
      "contact.hours": "Working hours", "contact.hoursV": "08:00 – 20:00 · Sunday closed",
      "contact.btn": "Message Amiira Beauty on WhatsApp",
      "float": "Book on WhatsApp",
      "foot": "Makeup · Hair Styling · Henna", "foot2": "Made with love and beauty",
      "lang": "Language", "skip": "Skip to content"
    },
    so: {
      "nav.home": "Bogga Hore", "nav.services": "Adeegyada", "nav.work": "Shaqooyinka", "nav.book": "Ballan", "nav.contact": "Nala Soo Xiriir",
      "hero.eyebrow": "Qurxin · Timo · Xinne",
      "hero.t1": "Sheeko kasta", "hero.t2": "gacan ayay ka bilaabataa",
      "hero.text": "Qurxinta wajiga, habaynta timaha iyo xinnaha oo lagu sameeyo daryeel, xarrago iyo taabasho dumarimo.",
      "hero.cta1": "Daawo shaqooyinka", "hero.cta2": "Ballan qaado WhatsApp",
      "stat.real": "shaqo dhab ah oo la tusay", "stat.henna": "muuqaal xinne", "stat.hours": "Isniin – Sabti",
      "marquee": "Qurxin · Habaynta Timaha · Xinne ·",
      "svc.eyebrow": "Waxa aan sameyno", "svc.title": "Qurux gacanta lagu sameeyey",
      "svc.makeup": "Qurxinta Wajiga", "svc.hair": "Habaynta Timaha", "svc.henna": "Xinne",
      "svc.makeup.d": "Qurxin jilicsan, xarrago leh oo qurux badan munaasabadahaaga gaarka ah.",
      "svc.hair.d": "Timo si qurux badan loo habeeyey si muuqaalkaaga loo dhammaystiro.",
      "svc.henna.d": "Naqshado xinne oo faahfaahsan oo xarrago leh, laguna sameeyey taabasho farshaxanimo.",
      "svc.see": "Daawo shaqooyinka",
      "work.eyebrow": "Buugga shaqooyinka", "work.title": "Shaqooyinkeenna",
      "work.all": "Dhammaan", "work.makeup": "Qurxin", "work.hair": "Timo", "work.henna": "Xinne",
      "work.realOnly": "Shaqo dhab ah oo keliya",
      "work.more": "Tus intaa dheer", "work.count": "{n} shaqo",
      "badge.real": "Shaqo dhab ah", "badge.ai": "Hiraal AI",
      "work.note": "Waxyaabaha la calaamadeeyey “Hiraal AI” waa sawirro loo sameeyey in ay dhammaystiraan shaqada dhabta ah ee Amiira Beauty.",
      "how.eyebrow": "Sida ay u shaqeyso", "how.title": "Saddex tillaabo oo fudud",
      "how.1.t": "Dooro qaabkaaga", "how.1.d": "Fiiri shaqooyinka, dooro qaab aad jeceshahay, ama noo sheeg fikirkaaga.",
      "how.2.t": "Noo soo dir fariin", "how.2.d": "Buuxi foomka ballanta ama WhatsApp noogu soo dir taariikhda iyo faahfaahinta.",
      "how.3.t": "U raaxayso maalintaada", "how.3.d": "Waan xaqiijinaynaa waqtiga, adna waxaad ka tagaysaa adigoo qurux badan.",
      "faq.eyebrow": "Waxaa fiican in la ogaado", "faq.title": "Su'aalo iyo jawaabo",
      "faq.q1": "Xinnuhu intee ayuu jiraa?", "faq.a1": "Caadi ahaan hal ilaa laba usbuuc. Waxay ku xiran tahay maqaarkaaga, meesha lagu sameeyay iyo sidaaad u daryeesho.",
      "faq.q2": "Aroos ama Ciid intee hore ayaan ballan qaadaa?", "faq.a2": "Sida ugu hore ee aad awooddo, maxaa yeelay maalmaha caanka ah way buuxsamaan. Noogu soo dir WhatsApp taariikhdaada, waanna xaqiijinaynaa.",
      "faq.q3": "Adeegyo noocee ah ayaad bixisaan?", "faq.a3": "Qurxinta wajiga, habaynta timaha iyo xinne. Waad isku dari kartaa munaasabad gaar ah.",
      "faq.q4": "Guriga ama hoolka ma timaadaan?", "faq.a4": "Fadlan nooga weydii WhatsApp. Waxay ku xiran tahay taariikhda iyo goobta.",
      "faq.q5": "Sidee ballan u qaadan karaa?", "faq.a5": "Isticmaal foomka bogga ama WhatsApp noogu soo dir +90 552 577 44 87, Isniin ilaa Sabti, 08:00 – 20:00.",
      "nav.faq": "Su'aalo", "lb.book": "Ballan qaado qaabkan →", "lb.msg": "Salaan Amiira Beauty, waxaan jeclaan lahaa inaan ballan ka qaado qaabkan: {service}.", "lb.close": "Xidh", "lb.prev": "Hore", "lb.next": "Xiga",
      "book.eyebrow": "Qabso ballantaada", "book.title": "Noo sheeg waxa aad rabto",
      "book.text": "Buuxi foomkan, WhatsApp wuxuu furmayaa fariin diyaar ah. Wax xog ah lagama keydiyo bogga.",
      "book.name": "Magacaaga", "book.service": "Adeegga", "book.date": "Taariikhda aad doorbidayso", "book.notes": "Faallo (munaasabad, qaab…)",
      "book.send": "Ku dir WhatsApp",
      "book.msg": "Salaan Amiira Beauty! Waxaan rabaa inaan qabsado: {service}.{date}{name}{notes}",
      "book.msg.date": " Taariikhda: {v}.", "book.msg.name": " Magacayga: {v}.", "book.msg.notes": " Faallo: {v}",
      "follow.eyebrow": "Nala soco", "follow.title": "Xinne iyo qurxin dheeraad ah TikTok", "follow.btn": "Fur TikTok",
      "contact.eyebrow": "Xiriir", "contact.title": "Waxaan jeclaan lahayn inaan kaa maqalno",
      "contact.text": "Amiira Beauty si toos ah WhatsApp ugala xiriir ballamaha iyo waqtiyada bannaan.",
      "contact.wa": "WhatsApp", "contact.days": "Maalmaha shaqada", "contact.daysV": "Isniin – Sabti",
      "contact.hours": "Saacadaha shaqada", "contact.hoursV": "08:00 – 20:00 · Axad: xiran",
      "contact.btn": "Amiira Beauty fariin ugu dir WhatsApp",
      "float": "Ballan qaado WhatsApp",
      "foot": "Qurxin · Habaynta Timaha · Xinne", "foot2": "Lagu sameeyey jacayl iyo qurux",
      "lang": "Luuqad", "skip": "U gudub nuxurka"
    },
    ar: {
      "nav.home": "الرئيسية", "nav.services": "الخدمات", "nav.work": "أعمالنا", "nav.book": "احجزي", "nav.contact": "تواصل معنا",
      "hero.eyebrow": "مكياج · شعر · حناء",
      "hero.t1": "كل حكاية", "hero.t2": "تبدأ بيد",
      "hero.text": "مكياج وتصفيف شعر وحناء تُنفذ بعناية وأناقة ولمسة أنثوية.",
      "hero.cta1": "شاهدي أعمالنا", "hero.cta2": "احجزي عبر واتساب",
      "stat.real": "عمل حقيقي معروض", "stat.henna": "فيديو حناء", "stat.hours": "الاثنين – السبت",
      "marquee": "مكياج · تصفيف الشعر · حناء ·",
      "svc.eyebrow": "ماذا نقدّم", "svc.title": "جمال بصناعة اليد",
      "svc.makeup": "المكياج", "svc.hair": "تصفيف الشعر", "svc.henna": "الحناء",
      "svc.makeup.d": "إطلالات مكياج ناعمة وأنيقة لمناسباتك الخاصة.",
      "svc.hair.d": "تسريحات شعر جميلة صُممت لتكمل إطلالتك المثالية.",
      "svc.henna.d": "نقوش حناء دقيقة وأنيقة بلمسة فنية أنثوية.",
      "svc.see": "شاهدي الأعمال",
      "work.eyebrow": "دليل الأعمال", "work.title": "أعمالنا",
      "work.all": "الكل", "work.makeup": "مكياج", "work.hair": "شعر", "work.henna": "حناء",
      "work.realOnly": "الأعمال الحقيقية فقط",
      "work.more": "عرض المزيد", "work.count": "{n} عمل",
      "badge.real": "عمل حقيقي", "badge.ai": "إلهام بالذكاء الاصطناعي",
      "work.note": "العناصر المعلّمة «إلهام بالذكاء الاصطناعي» صور أُنشئت لتكمل أعمال Amiira Beauty الحقيقية.",
      "how.eyebrow": "كيف نعمل", "how.title": "ثلاث خطوات بسيطة",
      "how.1.t": "اختاري إطلالتك", "how.1.d": "تصفحي الأعمال واختاري ستايلاً يعجبك، أو أخبرينا بفكرتك.",
      "how.2.t": "راسلينا", "how.2.d": "أرسلي نموذج الحجز أو راسلينا على واتساب بالتاريخ والتفاصيل.",
      "how.3.t": "استمتعي بيومك", "how.3.d": "نؤكد الموعد وتغادرين وأنتِ في أجمل صورة.",
      "faq.eyebrow": "من المفيد معرفته", "faq.title": "أسئلة وأجوبة",
      "faq.q1": "كم تدوم الحناء؟", "faq.a1": "عادةً من أسبوع إلى أسبوعين. يعتمد ذلك على بشرتك ومكان الرسم وطريقة العناية بها.",
      "faq.q2": "قبل كم من الوقت أحجز للزفاف أو العيد؟", "faq.a2": "في أقرب وقت ممكن، فالتواريخ المطلوبة تمتلئ بسرعة. راسلينا على واتساب بتاريخك وسنؤكد التوفر.",
      "faq.q3": "ما الخدمات التي تقدمونها؟", "faq.a3": "المكياج وتصفيف الشعر والحناء، ويمكن الجمع بينها لمناسبة واحدة.",
      "faq.q4": "هل تأتون إلى المنزل أو القاعة؟", "faq.a4": "يرجى سؤالنا عبر واتساب، فالأمر يعتمد على التاريخ والموقع.",
      "faq.q5": "كيف أحجز؟", "faq.a5": "استخدمي النموذج في هذه الصفحة أو راسلينا على واتساب +90 552 577 44 87، من الاثنين إلى السبت، 08:00 – 20:00.",
      "nav.faq": "أسئلة", "lb.book": "احجزي هذا الستايل ←", "lb.msg": "مرحباً Amiira Beauty، أرغب بحجز ستايل مثل هذا: {service}.", "lb.close": "إغلاق", "lb.prev": "السابق", "lb.next": "التالي",
      "book.eyebrow": "احجزي موعدك", "book.title": "أخبرينا بما تريدين",
      "book.text": "املئي النموذج وسيفتح واتساب برسالة جاهزة. لا يتم حفظ أي بيانات في هذا الموقع.",
      "book.name": "اسمك", "book.service": "الخدمة", "book.date": "التاريخ المفضل", "book.notes": "ملاحظات (المناسبة، الستايل…)",
      "book.send": "أرسلي عبر واتساب",
      "book.msg": "مرحباً Amiira Beauty! أود حجز: {service}.{date}{name}{notes}",
      "book.msg.date": " التاريخ المفضل: {v}.", "book.msg.name": " اسمي: {v}.", "book.msg.notes": " ملاحظات: {v}",
      "follow.eyebrow": "تابعينا", "follow.title": "المزيد من الحناء والمكياج على تيك توك", "follow.btn": "افتحي تيك توك",
      "contact.eyebrow": "تواصل", "contact.title": "يسعدنا أن نسمع منكِ",
      "contact.text": "تواصلي مباشرة مع Amiira Beauty عبر واتساب للمواعيد والأوقات المتاحة.",
      "contact.wa": "واتساب", "contact.days": "أيام العمل", "contact.daysV": "الاثنين – السبت",
      "contact.hours": "ساعات العمل", "contact.hoursV": "08:00 – 20:00 · الأحد مغلق",
      "contact.btn": "راسلي Amiira Beauty عبر واتساب",
      "float": "احجزي عبر واتساب",
      "foot": "مكياج · تصفيف الشعر · حناء", "foot2": "صُنع بالحب والجمال",
      "lang": "اللغة", "skip": "انتقل إلى المحتوى"
    },
    tr: {
      "nav.home": "Ana Sayfa", "nav.services": "Hizmetler", "nav.work": "Çalışmalar", "nav.book": "Randevu", "nav.contact": "İletişim",
      "hero.eyebrow": "Makyaj · Saç · Kına",
      "hero.t1": "Her hikâye", "hero.t2": "bir elle başlar",
      "hero.text": "Makyaj, saç tasarımı ve kına; özen, zarafet ve feminen bir dokunuşla hazırlanır.",
      "hero.cta1": "Çalışmaları gör", "hero.cta2": "WhatsApp'tan randevu al",
      "stat.real": "gerçek çalışma", "stat.henna": "kına videosu", "stat.hours": "Pzt – Cmt",
      "marquee": "Makyaj · Saç Tasarımı · Kına ·",
      "svc.eyebrow": "Neler yapıyoruz", "svc.title": "Elle yapılan güzellik",
      "svc.makeup": "Makyaj", "svc.hair": "Saç Tasarımı", "svc.henna": "Kına",
      "svc.makeup.d": "Özel anlarınız için zarif, yumuşak ve göz alıcı makyaj görünümleri.",
      "svc.hair.d": "Kusursuz görünümünüzü tamamlamak için hazırlanmış güzel saç stilleri.",
      "svc.henna.d": "Sanatsal ve feminen bir dokunuşla hazırlanmış detaylı ve zarif kına tasarımları.",
      "svc.see": "Çalışmaları gör",
      "work.eyebrow": "Çalışma kataloğu", "work.title": "Çalışmalarımız",
      "work.all": "Tümü", "work.makeup": "Makyaj", "work.hair": "Saç", "work.henna": "Kına",
      "work.realOnly": "Yalnızca gerçek çalışmalar",
      "work.more": "Daha fazla göster", "work.count": "{n} çalışma",
      "badge.real": "Gerçek çalışma", "badge.ai": "AI ilhamı",
      "work.note": "“AI ilhamı” işaretli görseller, Amiira Beauty'nin gerçek portföyünü tamamlamak için oluşturulmuştur.",
      "how.eyebrow": "Nasıl çalışır", "how.title": "Üç basit adım",
      "how.1.t": "Tarzını seç", "how.1.d": "Çalışmalara göz at, sevdiğin bir stili seç ya da kendi fikrini anlat.",
      "how.2.t": "Bize yaz", "how.2.d": "Randevu formunu gönder ya da WhatsApp'tan tarih ve detayları yaz.",
      "how.3.t": "Günün tadını çıkar", "how.3.d": "Saati onaylarız, sen de kendini güzel hissederek ayrılırsın.",
      "faq.eyebrow": "Bilmekte fayda var", "faq.title": "Sorular ve cevaplar",
      "faq.q1": "Kına ne kadar kalıcı?", "faq.a1": "Genellikle bir ila iki hafta. Cildine, uygulandığı yere ve sonraki bakıma bağlıdır.",
      "faq.q2": "Düğün veya bayram için ne kadar önceden randevu almalıyım?", "faq.a2": "Mümkün olduğunca erken, çünkü popüler tarihler çabuk dolar. WhatsApp'tan tarihini yaz, müsaitliği onaylayalım.",
      "faq.q3": "Hangi hizmetleri sunuyorsunuz?", "faq.a3": "Makyaj, saç stili ve kına. Özel bir gün için bunları birleştirebilirsin.",
      "faq.q4": "Eve veya mekâna gelebiliyor musunuz?", "faq.a4": "Lütfen WhatsApp'tan sorun. Tarihe ve konuma bağlıdır.",
      "faq.q5": "Nasıl randevu alırım?", "faq.a5": "Bu sayfadaki formu kullan ya da +90 552 577 44 87 numarasına WhatsApp'tan yaz, Pazartesi–Cumartesi, 08:00 – 20:00.",
      "nav.faq": "SSS", "lb.book": "Bu tarzı ayırt →", "lb.msg": "Merhaba Amiira Beauty, şu tarzda randevu almak istiyorum: {service}.", "lb.close": "Kapat", "lb.prev": "Önceki", "lb.next": "Sonraki",
      "book.eyebrow": "Randevunuzu alın", "book.title": "Aklınızdakini bize anlatın",
      "book.text": "Formu doldurun, WhatsApp hazır mesajınızla açılsın. Bu sitede hiçbir veri saklanmaz.",
      "book.name": "Adınız", "book.service": "Hizmet", "book.date": "Tercih ettiğiniz tarih", "book.notes": "Notlar (özel gün, stil…)",
      "book.send": "WhatsApp'tan gönder",
      "book.msg": "Merhaba Amiira Beauty! Şu hizmet için randevu almak istiyorum: {service}.{date}{name}{notes}",
      "book.msg.date": " Tercih ettiğim tarih: {v}.", "book.msg.name": " Adım: {v}.", "book.msg.notes": " Notlar: {v}",
      "follow.eyebrow": "Takip edin", "follow.title": "TikTok'ta daha fazla kına ve makyaj", "follow.btn": "TikTok'u aç",
      "contact.eyebrow": "İletişim", "contact.title": "Sizden haber almak isteriz",
      "contact.text": "Randevu ve uygunluk için Amiira Beauty ile doğrudan WhatsApp üzerinden iletişime geçin.",
      "contact.wa": "WhatsApp", "contact.days": "Çalışma günleri", "contact.daysV": "Pazartesi – Cumartesi",
      "contact.hours": "Çalışma saatleri", "contact.hoursV": "08:00 – 20:00 · Pazar kapalı",
      "contact.btn": "Amiira Beauty'ye WhatsApp'tan mesaj gönder",
      "float": "WhatsApp'tan randevu al",
      "foot": "Makyaj · Saç Tasarımı · Kına", "foot2": "Sevgi ve güzellikle hazırlandı",
      "lang": "Dil", "skip": "İçeriğe geç"
    }
  };

  const KEY = "amiiraLanguage";
  const get = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const set = (l) => { try { localStorage.setItem(KEY, l); } catch { /* storage blocked */ } };
  const guess = () => {
    const n = (navigator.language || "en").slice(0, 2).toLowerCase();
    return T[n] ? n : "en";
  };

  let lang = get();
  if (!T[lang]) lang = guess();

  const fmt = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => (vars && vars[k] !== undefined ? vars[k] : ""));
  window.t = (key, vars) => fmt((T[lang] && T[lang][key]) || T.en[key] || key, vars);
  window.currentLang = () => lang;

  function apply() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(",").forEach((pair) => {
        const [attr, key] = pair.split(":");
        el.setAttribute(attr.trim(), t(key.trim()));
      });
    });
    document.querySelectorAll(".lang-btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.dispatchEvent(new CustomEvent("amiira:lang", { detail: lang }));
  }

  window.setLang = (l) => { if (!T[l]) return; lang = l; set(l); apply(); };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-btn").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    apply();
  });
})();
