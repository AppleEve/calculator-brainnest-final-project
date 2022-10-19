function operate() {

    let buttons = document.querySelectorAll('.button');
    let screen = document.querySelector('.display');
    let equalsButton = document.querySelector('.equalsButton');
    let allClearButton = document.querySelector('.clearAll');
    let deleteButton = document.querySelector('.delete');
    let previousCalculation = document.querySelector('.previousCalculation');
    let currentCalculation = document.querySelector('.currentCalculation');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.value;
            screen.value += value;
         })
    });

    equalsButton.addEventListener('click', function(e){
        if(screen.value === ""){
            screen.value = "0";
        } else {
            let displayValue = eval(screen.value);
            screen.value = displayValue;
        }
    })
}
operate();