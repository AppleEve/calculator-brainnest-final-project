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
            let result = eval(screen.value);
            screen.value = result;
    })

    allClearButton.addEventListener('click', function(e){
        screen.value = " ";
    })
}
operate();