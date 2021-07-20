//import {without} from 'lodash';     
//We are importing without.js from lodash folder But this work with ES6 and above.


// //Before this we use to do:
// var _= require('lodash');       //We have assigned _ for lodash

// var array= [1,2,3,4,5,6,7,8];
// console.log('answer:', _.without(array, 3));


var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradient");



function setGradient(){
    body.style.background= "linear-gradient(to right, "+ color1.value + "," + color2.value+ ")";

    css.textContent= body.style.background+ ";";
}


//Event for inputs is called input. Anytime input value changes we can detect that

color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);