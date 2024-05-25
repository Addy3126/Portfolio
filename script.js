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
  let timePeriod = "PM";
  let date = new Date();
  let localHours = date.getUTCHours() + 5;
  let localMinutes = date.getUTCMinutes() + 30;
  if(localMinutes>59){
    localHours += 1;
    localMinutes -= 60;
    if(localMinutes<10){localMinutes = "0" + localMinutes}
  }
  if(localHours<12||localHours>23){
    timePeriod = "AM";
  }
  localHours = localHours%12;
  if(localHours == 0){localHours = 12}
  const shortLocalTime = `${localHours}:${localMinutes} ${timePeriod} GMT +5:30`;
  document.querySelector(".header_LocalTime").innerText = shortLocalTime;
}
setInterval(localTimeUpdate, 1000);

// About Section Heading - Horizontal Scroll => Direction: Left
let aSh = document.querySelector(".aboutSecHeading");
 window.onscroll = () =>{
  let pos = window.scrollY;
  aSh.style.left = `-${pos}px`;
 };

//  Landing Page Content Fade Out
 $(window).scroll(function(){
    $(".fadeoutLanding").css("opacity", 1 - $(window).scrollTop()/400);
 });

 document.querySelector('#about').addEventListener('click', function(){
  document.querySelector('.aboutSecHeading').scrollIntoView(true);
});