// Program Title
console.log("Hi");

// Number Analyzer By Parwin

// Button event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let number = +document.getElementById("search-in").value;

  // Process the Output - Positive/Negative/Zero
  if (number > 0) {
    document.getElementById("sign-out").innerHTML = "Positive";
  } else if (number < 0) {
    document.getElementById("sign-out").innerHTML = "Negative";
  } else {
    document.getElementById("sign-out").innerHTML = "Zero";
  }

  // Process the Output - Even or Odd
  if (number % 2 || number === 0) {
    document.getElementById("even-odd-out").innerHTML = "Odd";
  } else {
    document.getElementById("even-odd-out").innerHTML = "Even";
  }
}
