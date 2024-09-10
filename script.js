const displayKeyValue = document.querySelector(".js-display");

function display(input) {
  //displayKeyValue.value = displayKeyValue.value + input;
  displayKeyValue.value += input;
}

function resetDisplay() {
  displayKeyValue.value = " ";
}

function deletButton() {
  displayKeyValue.value = displayKeyValue.value.substring(
    0,
    displayKeyValue.value.length - 1
  ); //toString().slice(0, -1);
}

function calc() {
  try {
    displayKeyValue.value = eval(displayKeyValue.value);
  } catch (error) {
    displayKeyValue.value = "Error";
  }
}

function dbl() {
  displayKeyValue.value = "Error";
}
