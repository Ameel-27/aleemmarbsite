function loan() {
  const loanAmount = document.getElementById("loan-amount").valueAsNumber;
  const loanDuration = document.getElementById("loan-duration").valueAsNumber;

  const interestRate = 0.05;
  const loanRepayment = loanAmount * loanDuration  * interestRate;

  document.getElementById("loan-repayment").innerHTML = `You have been given a loan of $${loanAmount} with an interest rate of ${interestRate * 100}%. Your payback amount is $${loanRepayment}.`;
}

function medical() {
  document.getElementById("medical-message").innerHTML = "You have been granted free medical service for your condition. Visit the MARB Hospital at any time for further process.";
}

function scholarship() {
  let studentFee = document.getElementById("institute-fee").valueAsNumber;
  const matricPerc = document.getElementById("student-selection").value;

  switch (matricPerc) {
    case "70-79%":
      studentFee -= studentFee * 0.3;
      break;
    case "80-89%":
      studentFee -= studentFee * 0.5;
      break;
    case "90%+":
      studentFee -= studentFee * 1;
      break;
  }

  document.getElementById("scholar-fee").innerHTML = `Congratulations for the scholarship! Your discounted institute fee is now $${studentFee}.`;
} 
