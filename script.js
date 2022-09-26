let deadline = new Date("oct 24, 2022 00:00:00").getTime();
const  time_h2= document.querySelector('time_h2');
/* const english=document.querySelector('.english-translate');
const french=document.querySelector('.french-translate'); */
const day= document.querySelector('#d-day');
const hour= document.querySelector('#h-hour');
const second= document.querySelector('#s-second');
const filebtn = document.querySelector('.file-similation');
const file=document.querySelector('input[type="file"]');

/* english.addEventListener('click', (e)=>{
    e.preventDefault();
    time_h2.innerText="End of registrations in";
    day.innerText="DAYS";
    hour.innerText="HOURS";
    second.innerText="SECONDS";
})
french.addEventListener('click', ()=>{
    time_h2.innerText="Fin des inscriptions dans";
    day.innerText="JOURS";
    hour.innerText="HEURES";
    second.innerText="SECONDES";
}) */

filebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    file.click();
})
let x = setInterval(function() {
  
let now = new Date().getTime();
let t = deadline - now;
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("day").innerHTML =days;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; }
}, 1000);