function updateResult(message, isError) {
  const result = document.getElementById("result");
  result.textContent = message;
  result.className = isError ? "result error" : "result";
}

function calculateAndRender() {
  const amount = document.getElementById("amount").value;
  const rate = document.getElementById("rate").value;

  try {
    const tax = window.taxCalculator.calculateTax(amount, rate);
    const total = window.taxCalculator.calculateTotal(amount, rate);
    updateResult("Tax: $" + tax.toFixed(2) + " | Total: $" + total.toFixed(2), false);
  } catch (error) {
    updateResult(error.message, true);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calculate-btn").addEventListener("click", calculateAndRender);
});
