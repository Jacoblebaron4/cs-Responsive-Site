
document.addEventListener("DOMContentLoaded", function () {
    var icon = document.getElementById("icon");
    var bgImg = document.querySelector(".header-img");
    var body = document.body;
  
    function changeHeaderBackgroundImage(newImageUrl) {
      bgImg.style.backgroundImage = `url('${newImageUrl}')`;
    }
  
    icon.onclick = function () {
      body.classList.toggle("dark-theme");
      if (body.classList.contains("dark-theme")) {
        icon.src = "img/shrimp-solid.svg";
        changeHeaderBackgroundImage("img/light-theme.jpg");
      } else {
        icon.src = "img/ghost-solid.svg";
        changeHeaderBackgroundImage("img/lightbulb.png");
      }
    };
  });
  