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

var image5 = document.querySelector(".img5");

image5.onclick=(evt)=>{
  location.href = "https://www.medlife.com/healthstore2?ef_id=CjwKCAiAtK79BRAIEiwA4OskBlkQ5VyM94AdN8x_4_20kKBS2KLm-8Q65wR9_xQbgfL1JAuIL20yQhoCxNEQAvD_BwE:G:s&s_kwcid=AL!5681!3!428237027690!e!!g!!online%20medicine%20order&utm_source=googlesearch&utm_medium=cpc&utm_campaign=sem_cm_medlife_medical_products_Jaipur_TEST&utm_term=online%20medicine%20order&gclid=CjwKCAiAtK79BRAIEiwA4OskBlkQ5VyM94AdN8x_4_20kKBS2KLm-8Q65wR9_xQbgfL1JAuIL20yQhoCxNEQAvD_BwE";
}

var image6 = document.querySelector(".img6");

image6.onclick=(evt)=>{
  location.href = "https://pharmeasy.in/?gclid=CjwKCAiAtK79BRAIEiwA4OskBh4LQhgigkY-VtjYbPN8EyJyn3KAfQHXPZWXHF4nsNJ8kf4aWfgr9RoCaTQQAvD_BwE&isSEM=true&title=FLAT%2018%25%20OFF&coupon=G18&subtitle=on%20your%20first%20medicine%20order&ef_id=CjwKCAiAtK79BRAIEiwA4OskBh4LQhgigkY-VtjYbPN8EyJyn3KAfQHXPZWXHF4nsNJ8kf4aWfgr9RoCaTQQAvD_BwE:G:s&gclsrc=aw.ds";
}