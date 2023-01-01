let buttons = document.querySelectorAll("button");
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let calculation = "";
let usedOperator = "";
screen2.value = "0";
buttons.forEach(getButtonValue);

function getButtonValue(button) {
  button.addEventListener("click", (event) => {
    let target = event.target;
    updateScreen2(target);
  });
}

function removeActiveClass(button) {
  if (button.classList.contains("active-operator")) {
    button.classList.remove("active-operator");
  }
}

function updateScreen1(target) {
  if (screen1.value.length < 16) {
    screen1.value = screen1.value + screen2.value + target.value;
    calculation = screen1.value;
    console.log(calculation);
  }
}

function updateScreen2(target) {
  buttons.forEach(removeActiveClass);
  if (target.classList.contains("number")) {
    screen2.value =
      screen2.value === "0" ? target.value : screen2.value + target.value;
  } else if (target.classList.contains("operator")) {
    target.classList.add("active-operator");
    updateScreen1(target);
    screen2.value = "0";
  } else if (target.classList.contains("equals")) {
    updateScreen1(target);
    screen2.value = eval(calculation);
  } else if (target.classList.contains("decimal")) {
    if (!screen2.value.includes(".")) {
      screen2.value = screen2.value + target.value;
    }
  } else if (target.classList.contains("clear-all")) {
    screen1.value = "";
    screen2.value = "0";
  } else if (target.classList.contains("delete")) {
    if (screen2.value.length > 1) {
      screen2.value = screen2.value.slice(0, -1);
    } else {
      screen2.value = "0";
    }
  }
}

/*
  const calculatorData = {
    displayValue: "0",
    nbr1: null,
    operator: null,
    calculatorInput: false,
  };

  const display = document.querySelector(".screen");
  const buttons = document.querySelector(".calculator-buttons");
  const deleteButton = document.querySelector(".delete");

  buttons.addEventListener("click", (event) => {
    const target = event.target;

    if (!target.matches("button")) {
      return;
    }
    if (target.classList.contains("operator")) {
      target.classList.add("active-operator");
      handleOperator(target.value);
      updateDisplay();
      return;
    } else if (target.classList.contains("decimal")) {
      addDecimal(target.value);
      updateDisplay();
      return;
    } else if (target.classList.contains("clear-all")) {
      clear();
      return;
    }

    amendDigit(target.value);
    updateDisplay();
  });

  deleteButton.addEventListener("click", function (e) {
    deleteOne();
  });
  function updateDisplay() {
    display.value = calculatorData.displayValue;
  }

  function amendDigit(digit) {
    const displayValue = calculatorData.displayValue;
    if (calculatorData.calculatorInput === true) {
      calculatorData.displayValue = digit;
      calculatorData.calculatorInput = false;
    } else {
      calculatorData.displayValue =
        displayValue === "0" ? digit : displayValue + digit;
    }
  }

  function addDecimal(dot) {
    if (!calculatorData.displayValue.includes(dot)) {
      calculatorData.displayValue += dot;
    }
  }

  function handleOperator(clickedOperator) {
    const { nbr1, displayValue, operator } = calculatorData;
    const inputValue = parseFloat(displayValue);
    if (nbr1 === null && !isNaN(inputValue)) {
      calculatorData.nbr1 = inputValue;
    } else if (operator) {
      const result = operate(nbr1, inputValue, operator);
      console.log(result);
      if (result == "Infinity") {
        calculatorData.displayValue = "ERROR";
      } else {
        calculatorData.displayValue = String(result);
      }
      calculatorData.nbr1 = result;
    }
    calculatorData.calculatorInput = true;
    calculatorData.operator = clickedOperator;
  }

  function operate(nbr1, nbr2, operator) {
    if (operator === "+") {
      return nbr1 + nbr2;
    } else if (operator === "-") {
      return nbr1 - nbr2;
    } else if (operator === "*" && nbr2 !== "0") {
      return nbr1 * nbr2;
    } else if (operator === "/") {
      return nbr1 / nbr2;
    } else if (operator === "%") {
      return nbr1 % nbr2;
    }
  }

  function clear() {
    display.value = "0";
    calculatorData.displayValue = "0";
    calculatorData.nbr1 = null;
    calculatorData.operator = null;
  }

  function deleteOne() {
    calculatorData.displayValue = calculatorData.displayValue.slice(0, -1);
  }

  updateDisplay();
  */
