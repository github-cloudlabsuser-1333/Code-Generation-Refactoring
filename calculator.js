 // Function to add two numbers
 function add(a, b) {
    return a + b;
  }
 
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
 
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
 
  // Function to divide two numbers
  function divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  }
 
  // Declare and assign values to num1 and num2
  var num1 = 5;
  var num2 = 3;
 
  console.log("Addition:", add(num1, num2));
  console.log("Subtraction:", subtract(num1, num2));
  console.log("Multiplication:", multiply(num1, num2));
  console.log("Division:", divide(num1, num2));