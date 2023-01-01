let buttons = document.querySelectorAll("button");
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let calculation = "";
let usedOperator = "";
let result = false;
screen2.value = "0";
buttons.forEach(getButtonValue);

function getButtonValue(button) {
  button.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("clear-all")) {
      screen1.value = "";
      screen2.value = "0";
    } else {
      performOperation(target);
    }
  });
}

function performOperation(target) {
  if (result == false) {
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
      screen1.value = "";
      result = true;
    } else if (target.classList.contains("decimal")) {
      if (!screen2.value.includes(".")) {
        screen2.value = screen2.value + target.value;
      }
    } else if (target.classList.contains("delete")) {
      if (screen2.value.length > 1) {
        screen2.value = screen2.value.slice(0, -1);
      } else {
        screen2.value = "0";
      }
    }
  } else {
    screen2.value = target.value;
    result = false;
  }
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
