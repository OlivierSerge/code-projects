const billInput = document.getElementById("bill");
let selectedBill = 0;
let selectedTipInPercentage = 5;
let selectedNumber = 1;
const title = document.querySelector(".firstOutput h4");
const tipBtns = document.getElementsByClassName("tips");

console.log("===tip btns===>", tipBtns[4].innerText.split("%")[0]);
for(let i =0; i<tipBtns.length; i++){
  tipBtns[i].addEventListener('click', ()=>{
    console.log("====tip clicked==>", tipBtns[i].innerText.split("%")[0]);
    selectedTipInPercentage = tipBtns[i].innerText.split("%")[0];
  })
}

billInput.addEventListener("change", (e) => {
  selectedBill = e.target.value;
  console.log("selected bill is", selectedBill);
  const calcatedTip = calculateTip(selectedBill, selectedTipInPercentage);
  const calclatedBillAmt = billPerPerson(calcatedTip, selectedNumber);
  title.innerText = calclatedBillAmt;
});

// const tipFive = document.getElementById("five");

//tipFive.addEventListener("click", () => {
//  selectedTipInPercentage = 5;
//});
//const tipTen = document.getElementById("ten");
//tipTen.addEventListener("click", () => {
//  selectedTipInPercentage = 10;
//});

//const tipFifteen = document.getElementById("fifteen");
//tipFifteen.addEventListener("click", () => {
//  selectedTipInPercentage = 15;
//});
const customTip = document.getElementById("custom");
customTip.addEventListener("change", (e) => {
  selectedTipInPercentage = e.target.value;
});
const numberOfPeople = document.getElementById("numberOfPeople");
numberOfPeople.addEventListener("change", (e) => {
  selectedNumber = e.target.value;
  console.log("this is for", selectedNumber + "People");
});

function calculateTip(billAmount, tipPercentage) {
  const tipAmount = (billAmount * tipPercentage) / 100;
  return tipAmount;
}

function calculatePersonAge(birthYear, currentYear) {
  const age = currentYear - birthYear;
  return age;
}

calculatePersonAge(2005, 2022);

function checkIfNumberIsOddOrEven(number) {
  if (number % 2 === 0) return "number is evem";
}

function billPerPerson(billAmount, numberOfPeople) {
  const billPerPerson = billAmount / numberOfPeople;
  return billPerPerson;
}
function tipPerPerson(tipAmount, numberOfPeople) {
  const tipPerPerson = tipAmount / numberOfPeople;
  return tipPerPerson;
}
title.style.color = "red";
title.textContent = "$100";
// title.innerText = "text";
console.log(title);

//const newDiv = document.createElement("div");
//newDiv.innerHTML = <h2>Serge</h2>;
//newDiv.style.color = "blue";
// document.body.prepend(newDiv);
