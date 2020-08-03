var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonRandom = document.querySelector(".btn1");





function colorChange(){
  body.style.background = "linear-gradient(to right, "
   + color1.value + ", " + color2.value + " )";
css.textContent = body.style.background + ";" ;

}

color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);



function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
	
  }

  function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	colorChange();
}

buttonRandom.addEventListener("click", randomColors);

