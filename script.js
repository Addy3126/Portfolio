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
let date = new Date();
let options = {timeZone: 'Asia/Kolkata'};
let localTime = date.toLocaleTimeString('en-US', options);
let shortLocalTime = localTime.slice(0,5);
let x = localTime.slice(9,11);
shortLocalTime = shortLocalTime.concat(" ",x," GMT +5:30");
document.querySelector(".header_LocalTime").innerText = shortLocalTime;

function localTimeUpdate(){
  let date = new Date();
  let options = {timeZone: 'Asia/Kolkata'};
  let localTime = date.toLocaleTimeString('en-US', options);
  let shortLocalTime = localTime.slice(0,5);
  let x = localTime.slice(9,11);
  shortLocalTime = shortLocalTime.concat(" ",x," GMT +5:30");
  document.querySelector(".header_LocalTime").innerText = shortLocalTime;
  console.log(localTime)
}
setInterval(localTimeUpdate, 60000);

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
//Random circle 
// function moveDiv() {
//     var $span = $(".circle");

//     $span.fadeOut(1000, function() {
//         var maxLeft = $(window).width() - $span.width();
//         var maxTop = $(window).height() - $span.height();
//         var leftPos = Math.floor(Math.random() * (maxLeft + 1))
//         var topPos = Math.floor(Math.random() * (maxTop + 1))

//         $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
//     });
// };

// moveDiv();
// setInterval(moveDiv, 5000);