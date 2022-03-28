var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var element = document.getElementById("moveBar");
    var width = 2;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        element.style.width = width + "%";
      }
    }
  }
}
