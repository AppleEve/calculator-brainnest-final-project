function operate() {

    const calculator = document.querySelector('.calculator');
    const calculatorButtons = calculator.querySelector('.calculator-buttons');
    

    calculatorButtons.addEventListener('click' , function(e){
        if (e.target.matches('button')){
            const calculatorButton = e.target;
            const action = calculatorButton.dataset.action;

            if (!action) {
            console.log('number key!')
            }

            if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' ||
            action === 'percent'
            ) {
            console.log('operator key!')
            }

            if (action === 'decimal') {
            console.log('decimal key!')
            }

            if (action === 'clear') {
            console.log('clear key!')
            }

            if (action === 'equal') {
            console.log('equal key!')
            }
        }
    })
    
    

}
operate();