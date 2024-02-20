document.addEventListener("DOMContentLoaded", function () {
    const targets = document.querySelectorAll(".target");

    targets.forEach(function (target) {
      target.addEventListener("touchstart", function (event) {
        const touch = event.touches[0];
        throwTomato(touch.clientX, touch.clientY, target);
      });
    });

    function throwTomato(x, y, target) {
        const tomato = document.createElement("div");
        tomato.className = "tomato";
      
        const targetRect = target.getBoundingClientRect();
        const targetLeft = targetRect.left + window.scrollX;
        const targetTop = targetRect.top + window.scrollY;
      
        tomato.style.left = x - targetLeft - tomato.offsetWidth / 2 + "px";
        tomato.style.top = y - targetTop - tomato.offsetHeight / 2 + "px";
      
        document.body.appendChild(tomato);
      
        setTimeout(() => {
          tomato.style.transform = "translateY(-100%)";
        }, 10);
      }
      
  });
