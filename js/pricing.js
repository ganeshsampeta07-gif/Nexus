const pricingMatrix = {
  Starter: { base: 19 },
  Pro: { base: 49 },
  Enterprise: { base: 99 },
};

const currencyRates = {
  USD: 1,
  INR: 83,
  EUR: 0.92,
};

const priceState = {
  billing: "monthly",
  currency: "USD",
};

const formatPrice = (value, currency) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: value >= 100 ? 0 : 2,
  });

  return formatter.format(value);
};

const updatePricing = () => {
  const cards = document.querySelectorAll(".pricing-card");
  const rate = currencyRates[priceState.currency];
  const annualMultiplier = priceState.billing === "yearly" ? 12 * 0.8 : 1;

  cards.forEach((card) => {
    const planName = card.dataset.plan;
    const base = pricingMatrix[planName].base;
    const monthlyValue = base * rate;
    const displayValue = monthlyValue * annualMultiplier;
    const amountEl = card.querySelector(".price-amount");
    const symbolEl = card.querySelector(".price-symbol");
    const periodEl = card.querySelector(".price-period");

    const displayText = formatPrice(displayValue, priceState.currency);
    const displayPeriod = priceState.billing === "yearly" ? "/year" : "/month";

    amountEl.textContent = displayText.replace(/[^0-9.,-]/g, "");
    symbolEl.textContent = displayText.replace(/[0-9.,-\s]/g, "").trim() || "$";
    periodEl.textContent = displayPeriod;
    amountEl.setAttribute("data-billing", priceState.billing);
  });
};

const attachPricingEvents = () => {
  document.querySelectorAll(".toggle-pill").forEach((button) => {
    button.addEventListener("click", () => {
      const billing = button.dataset.billing;
      priceState.billing = billing;

      document.querySelectorAll(".toggle-pill").forEach((pill) => {
        const isActive = pill.dataset.billing === billing;
        pill.classList.toggle("is-active", isActive);
        pill.setAttribute("aria-pressed", String(isActive));
      });

      updatePricing();
    });
  });

  document.querySelectorAll(".currency-pill").forEach((button) => {
    button.addEventListener("click", () => {
      const currency = button.dataset.currency;
      priceState.currency = currency;

      document.querySelectorAll(".currency-pill").forEach((pill) => {
        const isActive = pill.dataset.currency === currency;
        pill.classList.toggle("is-active", isActive);
        pill.setAttribute("aria-pressed", String(isActive));
      });

      updatePricing();
    });
  });
};

const initPricing = () => {
  updatePricing();
  attachPricingEvents();
};

document.addEventListener("DOMContentLoaded", initPricing);
