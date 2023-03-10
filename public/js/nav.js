

// DATE DISPLAY

let hourDiv = document.getElementById('jajaja-nav-hour')
let dateDiv = document.getElementById('jajaja-nav-date');
let Div = document.getElementById('#jajaja-nav-hour');

// const changeClock = document.querySelector('#jajaja-change-clock');
// const popupClock = document.querySelector('.popup-clock');
// const modalHourWrapperCloser = document.querySelector('#modal-popup-close');
const mexicoHourTrigger = document.getElementById('jajaja-mexico-hour');
const franceHourTrigger = document.getElementById('jajaja-france-hour');



function time() {

  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
   let h = d.getHours();

  hourDiv.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);








// const date = new Date();
// const day = date.getDate();
// const month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
// const year = date.getFullYear();

// const str = `${day}/${month}/${year}`;

// dateDiv.innerHTML = str;


// function mexicoClock() {setInterval(() =>{
//   let d = new Date();
//    let s = d.getSeconds();
//    let m = d.getMinutes();
//     let h = d.getHours()+17;
 
//    hourDiv.textContent = 
//      ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
//  },1000)}

// mexicoHourTrigger.addEventListener('click',mexicoClock);

// function franceClock() {setInterval(() =>{
//   let d = new Date();
//    let s = d.getSeconds();
//    let m = d.getMinutes();
//     let h = d.getHours();
 
//    hourDiv.textContent = 
//      ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
//  },1000)};

//  franceHourTrigger.addEventListener('click',franceClock);













