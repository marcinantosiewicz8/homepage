{
   const clearChange = (change) => {
      change.innerText = "Wybierz";
    }

 const chooseCurrency = (change) => {
    const radioEuro = document.querySelector(".js-radio-1");
    const radioDolar = document.querySelector(".js-radio-2");
    const courseEuro = 4.68;
    const courseDolar = 4.70;
    const courseSwiss = 4.73;

    change.innerText = radioEuro.checked ? "EUR" : radioDolar.checked ? "USD" : "CHF";
    course.value = radioEuro.checked ? courseEuro : radioDolar.checked ? courseDolar : courseSwiss;

 }



 const calculateCurrency = (course) => {
    const sum = document.querySelector(".js-sum"); 
    const sumPl = document.querySelector(".js-sumPl");
    let suma = 0;
    suma = Number(sum.value) * Number(course.value);
    sumPl.value = suma.toFixed(2);
 }

 const init  = () => {
    const change = document.querySelector(".js-change");
    const form = document.querySelector(".js-form");
    const course= document.querySelector(".js-course");
    form.addEventListener("submit", (Event) => {
        Event.preventDefault();
        calculateCurrency(course);
    });

    form.addEventListener("input",  () => {
      chooseCurrency(change);
    });

    form.addEventListener("reset", () =>{
      clearChange(change);
    })
 }

init();


}
