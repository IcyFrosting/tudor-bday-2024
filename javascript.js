document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("target");

  target.addEventListener("touchstart", function (event) {
    const touch = event.touches[0];
    throwTomato(touch.clientX, touch.clientY);
  });

  function throwTomato(x, y) {
    const tomato = document.createElement("div");
    tomato.className = "tomato";
    tomato.style.left = x - 15 + "px"; // Adjust to center the tomato
    tomato.style.top = y - 15 + "px"; // Adjust to center the tomato
    target.appendChild(tomato);

    // Animate the tomato
    setTimeout(() => {
      tomato.style.transform = "translateY(-100%)";
    }, 10);
  }
});
