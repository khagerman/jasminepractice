window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM. x
// Put some default values in the inputs X MAYBE
// Call a function to calculate the current monthly payment X
function setupIntialValues() {
  const values = { amount: 100000, years: 20, rate: 4.5 };
  let userAmount = document.getElementById("loan-amount");
  userAmount.value = values.amount;
  let userYears = document.getElementById("loan-years");
  userYears.value = values.years;
  let userRate = document.getElementById("loan-rate");
  userRate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
// P = Amount of principle
// i = periodic interest rate (in our case yearly rate ÷ 12)
// n = total number of payments (years × 12)

function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = values.rate / 100 / 12;
  let n = values.years * 12;

  return ((p * i) / (1 - (1 + i) ** -n)).toFixed(2);
  console.log(p);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = `$${monthly}`;
}
