var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    for(var i = 0; i < modeButtons.length; i++){
        //Mode button event listeners
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }

    for(var i = 0; i < squares.length; i++){
        //add click listener to square to check if clicked square's color matches pickedColor
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?"
                changeColors(pickedColor);
                h1.style.backgroundColor = clickedColor;
            }  
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
    reset();
}

function reset(){
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //Generate random colors
    colors = generateRandomColors(numSquares);
    //Pick a random color from them
    pickedColor = pickColor();
    //Change colorDisplay to match new random color
    colorDisplay.textContent = pickedColor;
    //Change background colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})


function changeColors(color){
    //loop through all squares and set correct selected color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//Selects a random number from colors list and selects it be the color that needs to be selected.
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);//colors.length returns 1 more than highest index. So no need of adding 1 at the end
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //insert num random colors
    for(var i = 0; i < num; i++){
        arr.push(getRandomColor());
    }
    //return array
    return arr;
}

function getRandomColor(){
    //red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
//     h1.style.backgroundColor = "steelblue";
// })

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
//     h1.style.backgroundColor = "steelblue";
// })