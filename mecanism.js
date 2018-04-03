

document.addEventListener('DOMContentLoaded', function(){
var numberOfsquares=6;
var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var messageDisplay=document.getElementById("messageDisplay");
var colorDisplay=document.getElementById("displayColorcode");
var h1=document.querySelector("h1");
var resetBtn=document.getElementById("reset");
var easyBtn=document.getElementById("easyBtn");
var hardBtn=document.getElementById("hardBtn");
colorDisplay.textContent=pickedColor;

easyBtn.addEventListener("click",function(){
	this.classList.add("selected")
	hardBtn.classList.remove("selected");
	numberOfsquares=3;
	colors=generateRandomColors(numberOfsquares);	
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.backgroundColor=colors[i]
	}else{
		squares[i].style.display="none";
	}
	}

});

hardBtn.addEventListener("click",function(){
	this.classList.add("selected")
	easyBtn.classList.remove("selected");
	numberOfsquares=6;
	colors=generateRandomColors(numberOfsquares);	
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
	
		squares[i].style.backgroundColor=colors[i]
		squares[i].style.display="block";
	
	}
})

resetBtn.addEventListener("click",function(){
	colors=generateRandomColors(numberOfsquares);	
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	this.textContent="New Colors";
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
}
	h1.style.backgroundColor="#EDF1F2"
});


for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
		  changeColors(clickedColor);
		  resetBtn.textContent="Play Again?"
          messageDisplay.textContent="Correct!"
          h1.style.backgroundColor=clickedColor;
        }else{
          messageDisplay.textContent="Wrong!"
          this.style.backgroundColor="#363636"
        }
	});
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];

}

function generateRandomColors(num){
	var arr=[]
	for(var i=0;i<num;i++){
	arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)
	var g=Math.floor(Math.random()*256)
	return "rgb("+r+", "+g+", "+b+")";
}


}, false);



