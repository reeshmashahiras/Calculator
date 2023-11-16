// Event listeners
let resultDiv = document.getElementById('result');
let equationDiv = document.getElementById('equation');
let input = "";

  
// Function to update the result display
const updateResult = () => {
  resultDiv.innerHTML = input;
};

// Function to evaluate the user input and display the result
const evaluateInput = () => {
  equationDiv.innerHTML = input + "=";
  try {
    const sanitizedInput = input.replaceAll("×", "*").replaceAll("÷", "/");
    const result = eval(sanitizedInput);
    resultDiv.innerHTML = result;
    equationDiv.innerHTML = input + "=" + result;
  } catch (error) {
    equationDiv.innerHTML = "Invalid Input";
    resultDiv.innerHTML = "";
  }
};

//performing sqyare root 
const squareRoot = () => {
  if (input !== "") {
    const number = parseFloat(input);
    if (number >= 0) {
      const result = Math.sqrt(number);
      resultDiv.innerHTML = result;
      equationDiv.innerHTML = `√(${number}) = ${result}`;
      input = result.toString();
    } else {
      equationDiv.innerHTML = "Invalid Input";
      resultDiv.innerHTML = "";
    }
  }
};

// Event listeners and loops for button clicks
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    // Multiple functions
    // Handle square button click
    if (value === "sqr") {
       if (input !== "") {
          const number = parseFloat(input);
        const result = number * number;
        resultDiv.innerHTML = result;
        equationDiv.innerHTML = `sqr(${number}) = ${result}`;
        input = result.toString();} }
    else if (value === "Ac") {
      input = "";
      updateResult();
      equationDiv.innerHTML = "";}
    else if (value === "backspace") {
      input = input.slice(0, -1);
      updateResult();}
    else if (value === "=") {
      evaluateInput();}
    else if (value === "sqrt"){
      squareRoot(); }
    else {
      input += value;
      updateResult();}
  });
});

// Function to toggle between light and dark themes

const themeToggler = (themeButton) => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    const icon = themeButton.querySelector("ion-icon");
    if (icon.name === "moon-outline") {
        icon.name = "sunny-outline";
    } else {
        icon.name = "sunny-outline";
    }

    // Change the background image based on the theme
    const body = document.body;
    if (body.classList.contains("light")) {
        body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1194086.jpg')";
    } else {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?cs=srgb&dl=pexels-pixabay-355887.jpg&fm=jpg')";
    }
};



