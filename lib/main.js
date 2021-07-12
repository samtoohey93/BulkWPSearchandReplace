'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});


//Modal Output function

document.getElementsByClassName("input").value = "X";

// Basically, the up to 10 strings need to have their input fields concatinated. from there, that output this then copied into the modal box and shown as a CLI output command
//Modal button function for input selection
const inputs = document.querySelectorAll('input') // Get all the inputs
const inputsArray = Array.from(inputs) // Gotta convert it to an array and not a nodelist
const inputValues = inputsArray.map(input => input.value) // Get just their values
const combinedText = inputValues.join(', ') //Combine