//Custom Cursor
$(document).on('mousemove', function(e) {
  $('.cursorCustom').css({
    left: e.clientX,
    top: e.clientY,
  });
});

$(window).on('scroll', function(e) {

});


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

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