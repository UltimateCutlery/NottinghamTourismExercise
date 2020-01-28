function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function openP1() {
  location.href = "Page1.html";
}

function openP2() {
    location.href = "Page2.html";
}

function openP3() {
  location.href = "Page3.html";
}

function openHome() {
  location.href = "homepage.html";
}