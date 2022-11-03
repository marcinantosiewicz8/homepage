console.log(`Hej :)`);

let form = document.querySelector(".js-form");
let sum = document.querySelector(".js-sum");
let course= document.querySelector(".js-course");
let sumPl = document.querySelector(".js-sumPl");
let radioEuro = document.querySelector(".js-radio-1");
let radioDolar = document.querySelector(".js-radio-2");
let radioFrank = document.querySelector(".js-radio-3");
let change = document.querySelector(".js-change");

form.addEventListener("input", () => {
    
    change.innerText = radioEuro.checked ? "EUR" : radioDolar.checked ? "USD" : "CHF";
    
});

// can be done without the number function
form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    let suma = 0;
    suma = Number(sum.value) * Number(course.value);
    sumPl.value = suma.toFixed(2);
});