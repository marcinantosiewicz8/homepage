{
    

 const chooseCurrency = () => {
    const change = document.querySelector(".js-change");
    const radioEuro = document.querySelector(".js-radio-1");
    const radioDolar = document.querySelector(".js-radio-2");

    change.innerText = radioEuro.checked ? "EUR" : radioDolar.checked ? "USD" : "CHF";
 }

 const calculateCurrency = () => {
    const sum = document.querySelector(".js-sum");
    const course= document.querySelector(".js-course");
    const sumPl = document.querySelector(".js-sumPl");
    let suma = 0;
    suma = Number(sum.value) * Number(course.value);
    sumPl.value = suma.toFixed(2);
 }

 const init  = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", (Event) => {
        Event.preventDefault();
        calculateCurrency();
    });

    form.addEventListener("input",  (chooseCurrency));
 }

init();
       
}
