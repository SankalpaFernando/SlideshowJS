//Global Scope
var Index = 0;

var cssId="slidecss";
if(!document.getElementById(cssId)){
    var head =document.head;
    var link =document.createElement("link");
    link.id=cssId;
    link.href="CSS/slideshow.css";
    link.rel="stylesheet";
    head.appendChild(link);
}
if(!document.getElementById("animatecss")){
  var head =document.head;
  var link =document.createElement("link");
  link.id="animatecss";
  link.href="animate.css";
  link.rel="stylesheet";
  head.appendChild(link);
}
sliding();
function sliding() {
  let slides = Array.from(document.querySelectorAll(".slide"));
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  Index++;
  if (Index > slides.length) {
    Index = 1;
  }
  slides[Index - 1].style.display = "block";
  setTimeout(sliding, 2000);
}
