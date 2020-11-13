var button = document.getElementById("clicktoknowbutton");

button.onclick=(evt)=>{
    location.href = "#vege";
}

const inputs = document.querySelectorAll(".input");
// usage of functions
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var vegeeslist = ["1. Onion", "2. Tomato", "3. Potatos", "4. Cauli Flower", "5. Capsicum", "6. Cabbage", "7. Bitter Gourd", "8. Cucumber", "9. Pumpkin", "10. Brinjal"];

var i = 0 ;


var x = "";


var buttonVege1 = document.getElementById("vegelist");

buttonVege1.onclick=(evt)=>{
  if(i<vegeeslist.length){
    x+=vegeeslist[i++]+"<br>";
  }
  document.getElementById("vegeslist").innerHTML = x ; 
}


var nextPulses = document.getElementById("nextpulses");

nextPulses.onclick=(evt)=>{
  location.href = "#pulses";
}

var nextPetrol = document.getElementById("nextpetrol");

nextPetrol.onclick=(evt)=>{
  location.href = "#petrol";
}


var pulselist = ["1. Moong", "2.Toor", "3. Rajma", "4. Chana", "5. Flour"];

var j = 0 ;


var y = "";


var buttonPulses1 = document.getElementById("pulseslists");

buttonPulses1.onclick=(evt)=>{
  if(j<pulselist.length){
    y+=pulselist[j++]+"<br>";
  }
  document.getElementById("pulseslist").innerHTML = y ; 
}


var nextPetrol =document.getElementById("nextpetrol");

nextPetrol.onclick=(evt)=>{
  location.href = "#petrol";
}

var buttonPetrol1 = document.getElementById("nextmedicines");

buttonPetrol1.onclick=(evt)=>{
  location.href = "#medicines";
}

var nextLaptopsTabsMobiles = document.getElementById("nextLaptopsTabsMobiles");

nextLaptopsTabsMobiles.onclick=(evt)=>{
  location.href = "#laptops-mobiles-tabs";
}

var nextHomeLoan = document.getElementById("nexthomeloan");

nextHomeLoan.onclick=(evt)=>{
  location.href = "#home-loan";
}

var nextCars = document.getElementById("nextcars");

nextCars.onclick=(evt)=>{
  location.href = "#cars";
}