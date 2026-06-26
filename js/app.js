const revealItems = Array.from(document.querySelectorAll(".reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const progressBar = document.querySelector(".scroll-progress");

const updateScrollState = () => {
  document.body.classList.toggle("is-scrolled", window.scrollY > 20);
};

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (scrollTop / height) * 100 : 0;
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
};

window.addEventListener("scroll", () => {
  updateScrollState();
  updateProgress();
}, { passive: true });
window.addEventListener("resize", updateProgress);
updateScrollState();
updateProgress();

const faqItems = Array.from(document.querySelectorAll(".faq-item"));

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  button?.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");
    faqItems.forEach((entry) => {
      entry.classList.remove("is-open");
      const otherButton = entry.querySelector(".faq-question");
      otherButton?.setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      button?.setAttribute("aria-expanded", "true");
    }
  });
});

const handleLoader = () => {
  document.body.classList.add("is-loaded");
};

window.addEventListener("load", handleLoader);

const navLinks = Array.from(document.querySelectorAll(".nav__links a, .btn"));
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.getAttribute("href")?.startsWith("#")) {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});
