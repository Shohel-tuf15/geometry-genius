// rombus area calculate

function rhombusArea() {
  const diagonal1 = inputFieldByID("rhombus-diagonal1");

  const diagonal2 = inputFieldByID("rhombus-diagonal2");

  const rhombusArea = 0.5 * diagonal1 * diagonal2;

  setAreaTextByID("rhombus-area", rhombusArea);
}

// pentagon area calculate
function pentagonArea() {
  const perimeter = inputFieldByID("pentagon-perimeter");

  const apothem = inputFieldByID("pentagon-apothem");
  const pentagonArea = 0.5 * perimeter * apothem;

  setAreaTextByID("pentagon-area", pentagonArea);
}

// Ellipse area calculate

function ellipseArea() {
  const aAxis = inputFieldByID("ellipse-a-axis");

  const bAxis = inputFieldByID("ellipse-b-axis");

  const ellipseArea = 3.14 * aAxis * bAxis;

  setAreaTextByID("ellipse-area", ellipseArea);
}

function inputFieldByID(elementID) {
  const inputField = document.getElementById(elementID);
  const inputFieldText = inputField.value;
  const inputValue = parseFloat(inputFieldText);
  return inputValue;
}

function setAreaTextByID(elementID, area) {
  const setAreaText = document.getElementById(elementID);
  setAreaText.innerText = area;
}
