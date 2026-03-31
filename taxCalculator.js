(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.taxCalculator = factory();
  }
}(typeof self !== "undefined" ? self : this, function () {
  function toNumber(value) {
    const amount = Number(value);
    if (!Number.isFinite(amount)) {
      throw new Error("Amount must be a valid number.");
    }
    return amount;
  }

  function validateRate(rate) {
    const parsedRate = Number(rate);
    if (!Number.isFinite(parsedRate) || parsedRate < 0) {
      throw new Error("Tax rate must be zero or greater.");
    }
    return parsedRate;
  }

  function calculateTax(amount, rate) {
    const parsedAmount = toNumber(amount);
    const parsedRate = validateRate(rate);

    if (parsedAmount < 0) {
      throw new Error("Amount must be zero or greater.");
    }

    return Number((parsedAmount * (parsedRate / 100)).toFixed(2));
  }

  function calculateTotal(amount, rate) {
    const parsedAmount = toNumber(amount);
    if (parsedAmount < 0) {
      throw new Error("Amount must be zero or greater.");
    }

    return Number((parsedAmount + calculateTax(parsedAmount, rate)).toFixed(2));
  }

  return {
    calculateTax,
    calculateTotal
  };
}));
