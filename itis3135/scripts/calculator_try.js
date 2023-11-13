// create variables to hold the current input, first input, and operator
let currentInput = "";
let firstInput = "";
let operator = "";

// Get the elements
const buttons = document.getElementById('buttons');
const display = document.getElementById('display');

// Function to update the display
function updateDisplay() {
  display.value = `${firstInput} ${operator} ${currentInput}`; // used https://www.w3schools.com/JS//js_string_templates.asp
}

// Event handler function for button clicks
function clicked(event) {
  // Get the clicked button and its value and action
  const clickedButton = event.target;
  const buttonValue = clickedButton.value;
  // Gets the 'data-action' value that I set up for the buttons
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
  const buttonAction = clickedButton.getAttribute('data-action'); 
  
  // 'clear' action
  if (buttonAction === 'clear') {
    currentInput = "";
    firstInput = "";
    operator = "";
    console.log("Cleared");
    updateDisplay();
    return;
  }

  // number buttons
  if (buttonValue) {
    if (!operator) {
      firstInput += buttonValue;
      console.log(`First input: ${firstInput}`);
    } else {
      currentInput += buttonValue;
      console.log(`Current input: ${currentInput}`);
    }
    updateDisplay();
    return;
  }

  // operator buttons
  if (buttonAction) {
    switch (buttonAction) {
      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
        operator = buttonAction === 'add' ? '+' :
                   buttonAction === 'subtract' ? '-' :
                   buttonAction === 'multiply' ? '*' : '÷';
        console.log(`Operator set to ${operator}`);
        break;
      case 'calculate':
        let result;
        if (operator && firstInput && currentInput) {
          // https://www.w3schools.com/jsref/jsref_parsefloat.asp
          if (operator === '+') {
            result = parseFloat(firstInput) + parseFloat(currentInput);
          } else if (operator === '-') {
            result = parseFloat(firstInput) - parseFloat(currentInput);
          } else if (operator === '*') {
            result = parseFloat(firstInput) * parseFloat(currentInput);
          } else if (operator === '÷') {
            result = parseFloat(firstInput) / parseFloat(currentInput);
          }
          console.log(`Result: ${result}`);
          firstInput = result.toString();
          currentInput = "";
          operator = "";
        }
        break;
    }
    updateDisplay();
  }
}

// Attach the click event listener to all buttons
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
for (let i = 0; i < buttons.children.length; i++) {
  const childElement = buttons.children[i];
  childElement.addEventListener('click', clicked);
}
