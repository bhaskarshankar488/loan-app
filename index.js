// Function to calculate EMI
function calculateEMI(principal, annualRate, years) {
  const r = (annualRate / 100) / 12;  // monthly interest rate
  const n = years * 12;               // total months

  if (r === 0) return principal / n;  // zero-interest case

  const x = Math.pow(1 + r, n);
  return (principal * r * x) / (x - 1);
}

// Function to handle calculate button click
function handleCalculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const interest = parseFloat(document.getElementById("interest").value);
  const years = parseFloat(document.getElementById("years").value);

  // Input validation
  if ([amount, interest, years].some(v => isNaN(v) || v <= 0)) {
    alert("⚠️ Please enter valid positive numbers!");
    return;
  }

  // Calculate results
  const monthly = calculateEMI(amount, interest, years);
  const totalPayment = monthly * years * 12;
  const totalInterest = totalPayment - amount;

  // Update results in Loan Summary section
  document.getElementById("monthly").textContent =
    monthly.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  document.getElementById("total").textContent =
    totalPayment.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  document.getElementById("totalInterest").textContent =
    totalInterest.toLocaleString("en-IN", { style: "currency", currency: "INR" });
    document.getElementById("loan-summary").style.display = "block";
}

// Attach event listener after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcBtn").addEventListener("click", handleCalculate);
});

function handleReset() {
  // Clear inputs
  document.getElementById("amount").value = "";
  document.getElementById("interest").value = "";
  document.getElementById("years").value = "";

  // Reset summary values
  document.getElementById("monthly").textContent = "₹0";
  document.getElementById("total").textContent = "₹0";
  document.getElementById("totalInterest").textContent = "₹0";

  // Hide loan summary
  document.getElementById("loan-summary").style.display = "none";
}

// Attach event listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calcBtn").addEventListener("click", handleCalculate);
  document.getElementById("resetBtn").addEventListener("click", handleReset);
});
