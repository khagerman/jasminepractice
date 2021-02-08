it("should calculate the monthly rate correctly", function () {
  const values = { amount: 50000, years: 10, rate: 4.0 };
  expect(calculateMonthlyPayment(values)).toEqual("506.23");
});

it("should return a result with 2 decimal places", function () {
  const values = { amount: 5000, years: 5, rate: 3 };
  expect(calculateMonthlyPayment(values)).toEqual("89.84");
});

/// etc
