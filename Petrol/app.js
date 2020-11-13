var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}

var image3 = document.querySelector(".img3");

image3.onclick=(evt)=>{
  location.href = "https://en.wikipedia.org/wiki/Petroleum";
}

var image4 = document.querySelector(".img4");

image4.onclick=(evt)=>{
  location.href = "https://en.wikipedia.org/wiki/Diesel_fuel";
}