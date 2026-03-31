const { calculateTax, calculateTotal } = require("../taxCalculator");

describe("Tax Calculator", function () {
  it("calculates 10 percent tax for 100", function () {
    expect(calculateTax(100, 10)).toBe(10);
  });

  it("returns zero tax for zero amount", function () {
    expect(calculateTax(0, 10)).toBe(0);
  });

  it("returns zero tax for zero rate", function () {
    expect(calculateTax(100, 0)).toBe(0);
  });

  it("rounds tax to two decimals", function () {
    expect(calculateTax(99.99, 8.25)).toBe(8.25);
  });

  it("calculates total including tax", function () {
    expect(calculateTotal(100, 10)).toBe(110);
  });

  it("throws for negative amount", function () {
    expect(function () {
      calculateTax(-1, 10);
    }).toThrowError("Amount must be zero or greater.");
  });

  it("throws for negative rate", function () {
    expect(function () {
      calculateTax(100, -1);
    }).toThrowError("Tax rate must be zero or greater.");
  });
});
