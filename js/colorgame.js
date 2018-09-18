var arrrayColors= [];
var squares = document.querySelectorAll(".square");
var colorToDisplay = document.querySelector("h1 span");
var message = document.querySelector("#message");

var h1 =document.querySelector("h1");
var pickedColor= pickedRandomColor(6);

var reset =document.querySelector("#reset");
var easymode=document.querySelector("#easyMode");
var hardmode=document.querySelector("#hardMode");
var value;
var mode="hard";

//Add a listener for easy mode button
easymode.addEventListener("click", function(){
	
	easymode.classList.add("selected");
    hardmode.classList.remove("selected");
    arrrayColors= [];
    //arrrayColors= RamdomArrayColors(3);
    pickedColor=  pickedRandomColor(3);
    console.log(arrrayColors);
    console.log(pickedColor);
	mode="easy";
    for (i = 0; i < squares.length ; i++ ){
    	if (arrrayColors[i]){
    		squares[i].style.backgroundColor = arrrayColors[i];
		}else{
         	squares[i].style.display = "none";
		}		
	}

})
//Add a listener for hard mode button
hardmode.addEventListener("click", function(){
	easymode.classList.remove("selected");
    hardmode.classList.add("selected");
    arrrayColors= [];
    mode="hard";
    pickedColor=  pickedRandomColor(6);
    console.log(arrrayColors);
    console.log(pickedColor);

    for (i = 0; i < squares.length ; i++ ){
    		squares[i].style.backgroundColor = arrrayColors[i];
		   	squares[i].style.display = "block";
				
	}


})

//Add listener for the New color button
reset.addEventListener("click", function(){
	arrrayColors= [];
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Color";

	//arrrayColors=RamdomArrayColors(6);
	message.textContent="";
	if (mode==="hard"){
		value = 6;
	}else{
		value = 3;
	}

	pickedColor= pickedRandomColor(value);
	
	//generate random color array
	//assing clicked 
	//select a new picked color
	colorToDisplay.textContent = pickedColor;
	for (i = 0; i < squares.length ; i++ ){
    	squares[i].style.backgroundColor = arrrayColors[i];
	}	
});


//var generateRandomColor(); 

//var pickedColor=colors[randomColor];

	for (i = 0; i < squares.length ; i++ ){
	     //add initial colors to the div tags
		squares[i].style.backgroundColor = arrrayColors[i];
		//add listener on square
		squares[i].addEventListener("click", function() {
	      //alert("clicked on "+ this.style.backgroundColor);
	      // squares[i].style.backgroundColor = colors[i];
	      //compare the picked backgroud color with the new selected color
	      //add the value of clicked color
	      	var clickedColor = this.style.backgroundColor;
	      	
	      	
		    if (clickedColor == pickedColor){
		    	message.textContent="Correct!";
		    	changeColor(clickedColor);
		    	h1.style.backgroundColor=clickedColor;
		    	reset.textContent="Play Again?"


		    }else{

		    	this.style.backgroundColor="#232323";
		    	message.textContent="Try it Again!";
		    	//alert("Different color" + this.style.backgroundColor);
		        
		    }
		});
	}
colorToDisplay.textContent = pickedColor;


//***************************************************************************
//************************************************************************




//show picked color in the h1 span tag
//**********************************************************************
//**********************************************************************


//**********************************************************************
//**********************************************************************

function changeColor(color){
	//loop the square
	for (i = 0 ; i < squares.length ; i++){
		//change the color
		squares[i].style.backgroundColor=color;

	}
	


}


function pickedRandomColor (valArrayColors){

//generate a random color from the color list

var pickedRandomColors = Math.floor(Math.random() * valArrayColors);
//console.log(pickedRandomColors);
//console.log(colors[pickedRandomColors]);
RamdomArrayColors(valArrayColors);

return arrrayColors[pickedRandomColors];
}

function RamdomArrayColors(num){
//create a new empty array
	
	for (i=0 ; i < num; i++){

		arrrayColors.push(randomrgbcolor());

	}
//create the random color
return arrrayColors;

//insert the rgb color in an array


}

function randomrgbcolor(){
	//create r
var r = Math.floor(Math.random() * 256);
//create b
var g = Math.floor(Math.random() * 256);
//create g
var b = Math.floor(Math.random() * 256);



return "rgb("+ r + ", " + g +", " + b +")"
}