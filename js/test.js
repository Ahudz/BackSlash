$(document).ready(function($) {
  // Your code goes here
  console.log("working");
  document.getElementById("imageNormal").addEventListener("mouseover", () => {
    console.log("event");
    document.getElementById("imageNormal").src =
      "images/logo/backslash logo_BackSlash 3 White.png";
  });

  document.getElementById("imageNormal").addEventListener("mouseout", () => {
    console.log("eventoff");
    document.getElementById("imageNormal").src =
      "images/logo/backslash logo_BackSlash 3 Grey.png";
  });
});
