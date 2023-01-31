let Boxform = document.querySelector(".form");
let firstInput = document.querySelector(".first");
let lastInput = document.querySelector(".last");
let inputBtn = document.querySelector(".input-btn");
let firstBtn = document.querySelector(".first-btn");
let LastBtn = document.querySelector(".last-btn");
let natija = document.querySelector(".natija");

let arr = [];
inputBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (firstInput.value === "" || lastInput.value === "") {
    alert("Kalla qo'yma");
  }
  
  if (firstInput) {
    arr.unshift(firstInput.value);
    natija.textContent = `Natija: ${arr}`;
    firstInput.value = "";
  } else {
    firstInput.value === ""
  }
  
  if(lastInput){
    arr.push(lastInput.value);
    natija.textContent = `Natija: ${arr}`
    lastInput.value = ""
  }
  
  
});

firstBtn.addEventListener("click", function () {
  arr.shift()
  natija.textContent = `Natija: ${arr}`
  lastInput.value =""
});
LastBtn.addEventListener("click", function () {
  arr.pop()
  natija.textContent = `Natija: ${arr}`
  lastInput.value =""
});
