var redball =
    document.querySelector(".red-ball");
    console.log(redball);
window.addEventListener("mousemove", event => {
  //track the position of your mouse
  var x = event.clientX;
  var y = event.clientY;
  console.log('${x} + ${y}');
  //Make green-ball follow the cursor
  redball.style.top = y + "px";
  redball.style.left = x + "px";
})