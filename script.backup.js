
const data = window.AMIIRA_PORTFOLIO || {
  makeup: [],
  hair: [],
  henna: []
};

const chapters = [
  {
    key: "makeup",
    name: "MAKEUP"
  },
  {
    key: "hair",
    name: "HAIR STYLING"
  },
  {
    key: "henna",
    name: "HENNA"
  }
];

let chapterIndex = 0;
let itemIndex = 0;
let isTurning = false;

const bookPage = document.querySelector(".book-page");
const pageMedia = document.querySelector(".page-media");
const pageCategory = document.querySelector(".page-category");
const pageTitle = document.querySelector(".page-caption h3");
const pageText = document.querySelector(".page-caption p");
const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");
const dotsContainer = document.querySelector(".page-dots");

function currentChapter() {
  return chapters[chapterIndex];
}

function currentItems() {
  return data[currentChapter().key] || [];
}

function renderMedia(item) {
  if (!item) {
    pageMedia.innerHTML = `
      <div class="portfolio-placeholder">
        <span>♡</span>
        <strong>${currentChapter().name}</strong>
        <small>More portfolio content coming soon</small>
      </div>
    `;
    return;
  }

  if (item.type === "video") {
    pageMedia.innerHTML = `
      <video
        class="portfolio-media"
        src="${item.src}"
        controls
        playsinline
        preload="metadata"
      ></video>
    `;
  } else {
    pageMedia.innerHTML = `
      <img
        class="portfolio-media"
        src="${item.src}"
        alt="${currentChapter().name}"
        loading="lazy"
      />
    `;
  }
}

function renderDots() {
  const total = currentItems().length;

  dotsContainer.innerHTML = "";

  if (total <= 1) return;

  const visible = new Set([
    0,
    total - 1,
    itemIndex - 2,
    itemIndex - 1,
    itemIndex,
    itemIndex + 1,
    itemIndex + 2
  ]);

  [...visible]
    .filter(i => i >= 0 && i < total)
    .sort((a, b) => a - b)
    .forEach(i => {
      const dot = document.createElement("span");
      dot.className = "dot";

      if (i === itemIndex) {
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {
        if (isTurning || i === itemIndex) return;

        const direction =
          i > itemIndex ? "next" : "prev";

        itemIndex = i;
        animatePage(direction);
      });

      dotsContainer.appendChild(dot);
    });
}

function renderPage() {
  const chapter = currentChapter();
  const items = currentItems();
  const item = items[itemIndex];

  const total = items.length;

  pageCategory.textContent =
    `${chapter.name} • ${
      total ? itemIndex + 1 : 0
    }/${total}`;

  if (item) {
    pageTitle.textContent =
      item.source === "ai"
        ? `${chapter.name} Inspiration`
        : `${chapter.name} Portfolio`;

    pageText.textContent =
      item.source === "ai"
        ? "AI Inspiration • Created to complement the real Amiira Beauty portfolio."
        : "Real Amiira Beauty work.";
  } else {
    pageTitle.textContent = chapter.name;
    pageText.textContent =
      "More portfolio content coming soon.";
  }

  renderMedia(item);
  renderDots();
}

function nextPortfolioPage() {
  const items = currentItems();

  if (itemIndex < items.length - 1) {
    itemIndex++;
    return;
  }

  chapterIndex =
    (chapterIndex + 1) % chapters.length;

  itemIndex = 0;
}

function previousPortfolioPage() {
  if (itemIndex > 0) {
    itemIndex--;
    return;
  }

  chapterIndex =
    (chapterIndex - 1 + chapters.length)
    % chapters.length;

  itemIndex =
    Math.max(0, currentItems().length - 1);
}

function animatePage(direction) {
  if (isTurning) return;

  isTurning = true;

  const className =
    direction === "next"
      ? "page-turn-next"
      : "page-turn-prev";

  bookPage.classList.add(className);

  setTimeout(renderPage, 280);

  setTimeout(() => {
    bookPage.classList.remove(
      "page-turn-next",
      "page-turn-prev"
    );

    isTurning = false;
  }, 600);
}

nextButton.addEventListener("click", () => {
  if (isTurning) return;

  nextPortfolioPage();
  animatePage("next");
});

prevButton.addEventListener("click", () => {
  if (isTurning) return;

  previousPortfolioPage();
  animatePage("prev");
});

document
  .querySelectorAll(".service-card")
  .forEach((card, index) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
      chapterIndex = index;
      itemIndex = 0;

      renderPage();

      document
        .querySelector("#gallery")
        .scrollIntoView({
          behavior: "smooth"
        });
    });
  });

let touchStartX = 0;

bookPage.addEventListener(
  "touchstart",
  event => {
    touchStartX =
      event.changedTouches[0].screenX;
  },
  { passive: true }
);

bookPage.addEventListener(
  "touchend",
  event => {
    const touchEndX =
      event.changedTouches[0].screenX;

    const difference =
      touchStartX - touchEndX;

    if (Math.abs(difference) < 50) return;

    if (difference > 0) {
      nextPortfolioPage();
      animatePage("next");
    } else {
      previousPortfolioPage();
      animatePage("prev");
    }
  },
  { passive: true }
);

document.addEventListener(
  "keydown",
  event => {
    if (event.key === "ArrowRight") {
      nextPortfolioPage();
      animatePage("next");
    }

    if (event.key === "ArrowLeft") {
      previousPortfolioPage();
      animatePage("prev");
    }
  }
);

renderPage();
