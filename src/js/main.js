
function openNav() {
  document.getElementById("mySidepanel").style.width = "185px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

  var button = document.querySelector(".button"),
background = document.querySelector(".backgroundHover"),
firstWord = document.querySelectorAll(".button span"),
secondWord = document.querySelectorAll(".button i");

var tl = new TimelineMax({ paused:true });
tl.staggerTo(firstWord, 1, {color: "rgba(11,73,156)", rotationX: 360, ease: Expo.easeOut }, 0.03, "#start");
tl.staggerTo(secondWord, 1, {color: "rgba(11,73,156)", rotationX: 360, ease: Expo.easeOut}, 0.03, "#start");
tl.from(background, 0.25, {scaleX:"0%", transformOrigin:"left center", ease: Quad.easeInOut }, "#start");

//button.hover(function(){},function(){});
button.addEventListener("mouseenter",function(){
tl.play();
});

button.addEventListener("mouseleave",function(){
tl.reverse();
});

 
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
dropdown[i].addEventListener("click", function() {
this.classList.toggle("active");
var dropdownContent = this.nextElementSibling;
if (dropdownContent.style.display === "block") {
dropdownContent.style.display = "none";
} else {
dropdownContent.style.display = "block";
}
});
}


//cards functions.
