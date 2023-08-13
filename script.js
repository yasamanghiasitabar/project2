let c1 = document.querySelector("#circle1");
let c2 = document.querySelector("#circle2");
let logo1 = document.querySelector("#logo1");
let logo2 = document.querySelector("#logo2");
let customCodeContainer = document.querySelector("#customCodeContainer");
let leftcirclecode = document.querySelector("#leftcirclecode");
let rightcirclecode = document.querySelector("#rightcirclecode");

function enlarge_circle1() {
  c1.style.zIndex = "1000";
  logo1.style.zIndex = "1001";
  c1.style.transform = "scale(6)";
  logo1.style.transform = "translate(-350px,-250px)";

  setTimeout(function () {
    window.location.href = "july.html"; // Redirect after 1 second
  }, 1000);
}

function enlarge_circle2() {
  c2.style.transform = "scale(7)";
  logo2.style.transform = "translate(-800px,-250px)";

  setTimeout(function () {
    window.location.href = "alma.html"; // Redirect after 1 second
  }, 1000);
}
