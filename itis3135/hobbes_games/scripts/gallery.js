var slideIndex = 0;
// https://www.w3schools.com/jsref/met_win_cleartimeout.asp
var timeout;
slideshow();

function slideshow() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  clearTimeout(timeout);
  timeout = setTimeout(slideshow, 5000); 
}
// got this from https://www.w3schools.com/w3css/w3css_slideshow.asp

const nextButton = document.getElementById('next');

function next() {
  slideshow();
}

nextButton.onclick = next;