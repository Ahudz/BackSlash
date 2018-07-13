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

//nav bar logo hover
function logoHover() {
  document.getElementById("image-normal").src =
    "images/logo/backslash logo_BackSlash 3 White.png";
}

function logoOffHover() {
  document.getElementById("image-normal").src =
    "images/logo/backslash logo_BackSlash 3 Grey.png";
}

//arrow scroll
$(function() {
  $("#landing-arrow-link").on("click", function(event) {
    console.log("here");
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top
      },
      1000
    );
  });
});

//About scroll
$(function() {
  $("#about-nav").on("click", function(event) {
    console.log("about");
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top
      },
      1000
    );
  });
});

//Team Scroll
$(function() {
  $("#team-nav").on("click", function(event) {
    console.log("here");
    $("html, body").animate(
      {
        scrollTop: $("#team").offset().top
      },
      1000
    );
  });
});

//Pricing Scroll
$(function() {
  $("#pricing-nav").on("click", function(event) {
    console.log("here");
    $("html, body").animate(
      {
        scrollTop: $("#pricing").offset().top
      },
      1000
    );
  });
});

//ie detection
$(document).ready(function() {
  var isIE =
    !!navigator.userAgent.match(/Trident/g) ||
    !!navigator.userAgent.match(/MSIE/g);

  if (isIE) {
    alert(
      "Heyo! it looks like you are using Internet Explorer! Internet explorer is no longer supported by Microsoft and we recomend you use the Edge Browser instead. Our website may look a little funny if you continue with internet explorer!"
    );
  }
});

console.log("finished");
