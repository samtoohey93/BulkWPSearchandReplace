document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});


//Modal button function for input selection
const inputs = document.querySelectorAll('input') // Get all the inputs
const inputsArray = Array.from(inputs) // Gotta convert it to an array and not a nodelist
const inputValues = inputsArray.map(input => input.value) // Get just their values
const combinedText = inputValues.join(', ') //Combine