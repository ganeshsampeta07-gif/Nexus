const accordionState = {
  activeIndex: null,
  isMobile: window.matchMedia("(max-width: 768px)").matches,
};

const getFeatureCards = () => Array.from(document.querySelectorAll(".feature-card"));

const setFeatureCardState = (card, isActive) => {
  card.classList.toggle("is-active", isActive);
  card.setAttribute("data-open", isActive ? "true" : "false");
  const toggle = card.querySelector(".feature-toggle");
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(isActive));
  }
};

const closeAllFeatureCards = () => {
  getFeatureCards().forEach((card) => setFeatureCardState(card, false));
};

const openFeatureCard = (index) => {
  const cards = getFeatureCards();
  const targetCard = cards[index];
  if (!targetCard) {
    return;
  }

  closeAllFeatureCards();
  setFeatureCardState(targetCard, true);
  accordionState.activeIndex = index;
};

const syncFeatureAccordion = () => {
  const cards = getFeatureCards();
  if (cards.length === 0) {
    return;
  }

  if (accordionState.isMobile) {
    const activeCard = cards[accordionState.activeIndex];
    if (!activeCard) {
      return;
    }
    closeAllFeatureCards();
    setFeatureCardState(activeCard, true);
    return;
  }

  closeAllFeatureCards();
  if (accordionState.activeIndex !== null) {
    setFeatureCardState(cards[accordionState.activeIndex], true);
  }
};

const attachAccordionEvents = () => {
  getFeatureCards().forEach((card, index) => {
    const toggle = card.querySelector(".feature-toggle");
    toggle?.addEventListener("click", () => {
      if (accordionState.isMobile) {
        const isActive = card.classList.contains("is-active");
        if (isActive) {
          closeAllFeatureCards();
          accordionState.activeIndex = null;
        } else {
          openFeatureCard(index);
        }
      } else {
        if (accordionState.activeIndex === index) {
          closeAllFeatureCards();
          accordionState.activeIndex = null;
        } else {
          openFeatureCard(index);
        }
      }
    });
  });

  window.addEventListener("resize", () => {
    accordionState.isMobile = window.matchMedia("(max-width: 768px)").matches;
    syncFeatureAccordion();
  });
};

const initAccordion = () => {
  attachAccordionEvents();
  syncFeatureAccordion();
};

document.addEventListener("DOMContentLoaded", initAccordion);
