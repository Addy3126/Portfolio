//Custom Cursor
const ball = document.querySelector("div.cursorCustom");
let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;
let speed = 0.1;

function animate(){
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;
  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})

//Random circle 
function moveDiv() {
    var $span = $(".circle");

    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))

        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDiv();
setInterval(moveDiv, 5000);