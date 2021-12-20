const principalBox = document.querySelector("#principal")
const interestRateBox = document.querySelector("#interestRate")
const timesCompoundedBox = document.querySelector("#timesCompounded")
const totalYearsBox = document.querySelector("#totalYears")
const totalAmountSpan = document.querySelector("#totalAmount")
const compoundInterestSpan = document.querySelector("#compoundInterest")

function computeCompoundInterest() {
  const principal = principalBox.value
  const interestRate = interestRateBox.value
  const timesCompounded = timesCompoundedBox.value
  const totalYears = totalYearsBox.value
  const totalAmount = principal * ((1 + (interestRate/timesCompounded))**(timesCompounded*totalYears))
  const compoundInterest = totalAmount - principal 
  compoundInterestSpan.textContent = compoundInterest
  totalAmountSpan.textContent = totalAmount
}
principalBox.addEventListener('input', computeCompoundInterest)
interestRateBox.addEventListener('input',computeCompoundInterest)
timesCompoundedBox.addEventListener('input',computeCompoundInterest)
totalYearsBox.addEventListener('input',computeCompoundInterest)
