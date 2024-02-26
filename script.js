//Custom Cursor
$(document).on('mousemove', function(e) {
  $('.cursorCustom').css({
    left: e.clientX,
    top: e.clientY,
  });
});

$(window).on('scroll', function(e) {

});

//Smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

//Local Time
function localTimeUpdate(){
  let timePeriod = "AM";
  let date = new Date();
  let localHours = date.getUTCHours() + 5;
  let localMinutes = date.getUTCMinutes() + 30;
  if(localMinutes>59){
    localHours += 1;
    localMinutes -= 60;
    if(localMinutes<10){localMinutes = "0".concat(localMinutes)}
  }
  if(localHours>12){
    timePeriod = "PM";
    localHours -= 12;
    if(localHours<10){localHours = "0".concat(localHours)}
  }
  let shortLocalTime = "".concat(localHours,":",localMinutes," ",timePeriod," GMT +5:30")
  document.querySelector(".header_LocalTime").innerText = shortLocalTime;
  console.log(localHours);
}
setInterval(localTimeUpdate, 1000);

// //Shuffle Effect
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// document.querySelector(".shuffleText").onmouseover = event => {
//   let iterations = 0;

//   const interval = setInterval(() => {
//   event.target.innerText = event. target.innerText.split("").map((letter, index) => {
//     if(index < iterations){
//       return event.target.dataset.value[index];
//     }
//     return letters[Math.floor(Math.random()*26)]}).join("");
  
//   if(iterations >= event.target.dataset.value.length) clearInterval(interval);

//   iterations +=1/3;
// }, 50);
// }