const btn = document.getElementsByClassName("btn");

btn.addEventListener("click",function(){
 let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    
document.body.style.background = randColor.toUpperCase();
});



var x = document.getElementsByClassName(".heading");
x=`Background Color : "clickFunction()"`

