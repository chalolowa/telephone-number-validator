const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const isValidUSNumber = (input) => {
  const patterns = [
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
  ];
  return patterns.some((pattern) => pattern.test(input));
};

const checkFunc = () => {
  const input = userInput.value.trim();
  if (!input) {
    alert("Please provide a phone number");
    return;
  }
  const resultText = isValidUSNumber(input)
    ? `Valid US number: ${input}`
    : `Invalid US number: ${input}`;
  results.textContent = resultText;
};

const clearResults = () => {
  results.textContent = "";
  userInput.value = "";
};

checkBtn.addEventListener("click", checkFunc);
clearBtn.addEventListener("click", clearResults);
