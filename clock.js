function toggleClass(){
    const body = document.querySelector('body');
    body.classList.toggle('light');
}

const deg = 6;
const hr= document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc= document.querySelector('#sc');

setInterval(()=>{

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;
  
//i later used  a different sign not q quotation in the query linking
hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`; //was not sure of the quotation...
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
});