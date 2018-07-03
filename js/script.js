// When the user scrolls down 20px from the top of the document, slide down the navbar

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}

//mobile nav hamburger menu
var number = 0;
function navToggle() {
  "use strict";
  if (number % 2 === 0) {
    openNav();
  } else {
    closeNav();
  }
  console.log("click Num: " + number);
  number = number + 1;
}

//side menu
function openNav() {
  "use strict";
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  "use strict";
  document.getElementById("myNav").style.width = "0%";
}

function buttonFunction() {
  "use strict";
  document.getElementById("mobile-btn").classList.toggle("change");
}

function logoHover() {
  document.getElementById("imageNormal").src =
    "images/logo/backslash logo_BackSlash 3 White.png";
}

//ie detection
var isIE =
  !!navigator.userAgent.match(/Trident/g) ||
  !!navigator.userAgent.match(/MSIE/g);

if (isIE) {
  alert(
    "Heyo! it looks like you are using Internet Explorer! Internet explorer is no longer supported by Microsoft and we recomend you use the Edge Browser instead. Our website may look a little funny if you continue with internet explorer!"
  );
}

console.log("finished");
