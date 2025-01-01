// function triangle calculation
function calculateTriangleArea() {
  // calculate triangle base
  const triangleBase = document.getElementById("triangle-base");
  const triangleBaseText = triangleBase.value;

  const baseTriangle = parseFloat(triangleBaseText);
  console.log(typeof baseTriangle);

  //   calculate triangle height
  const triangleHeight = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeight.value;

  const heightTriangle = parseFloat(triangleHeightText);
  console.log(typeof heightTriangle);

  //   calculate triangle area
  const triangleArea = 0.5 * baseTriangle * heightTriangle;
  console.log("The area of triangle is:", triangleArea);

  //   Area display in the screen
  const triangleAreaDisplay = document.getElementById("triangle-area");
  triangleAreaDisplay.innerText = triangleArea;
}

// function rectangle area calculation
function calculateRectangleArea() {
  // calculate rectangle width
  const rectangleWidth = document.getElementById("rectangle-width");
  console.log(rectangleWidth);
  const rectangleWidthText = rectangleWidth.value;
  const widthRectangle = parseFloat(rectangleWidthText);

  //   calculate rectangle length
  const rectangleLength = document.getElementById("rectangle-length");
  console.log(rectangleLength);
  const rectangleLengthText = rectangleLength.value;
  const lengthRectangle = parseFloat(rectangleLengthText);

  //   calculate rectangle area
  const rectangleArea = widthRectangle * lengthRectangle;
  console.log("The area of rectangle is:", rectangleArea);

  //   rectangle area dispaly
  const rectangleAreaDisplay = document.getElementById("rectangle-area");
  rectangleAreaDisplay.innerText = rectangleArea;
}

// function Parallelogram area calculation

function ParallelogramArea() {
  const base = inputFieldByID("parallelogram-base");

  const height = inputFieldByID("parallelogram-height");

  const area = base * height;
  setAreaByID("parallelogram-area", area);
}

function inputFieldByID(elementID) {
  const inputField = document.getElementById(elementID);
  const inputFieldText = inputField.value;
  const inputValue = parseFloat(inputFieldText);
  return inputValue;
}

function setAreaByID(elementID, area) {
  const setArea = document.getElementById(elementID);
  setArea.innerText = area;
}
