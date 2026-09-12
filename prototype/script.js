document.addEventListener('DOMContentLoaded', () => {
    const previousOperandTextElement = document.getElementById('previousOperand');
    const currentOperandTextElement = document.getElementById('currentOperand');
    const buttons = document.querySelectorAll('.btn');

    let currentOperand = '0';
    let previousOperand = '';
    let operation = undefined;
    let resetDisplay = false;

    // Function to update the display
    const updateDisplay = () => {
        currentOperandTextElement.innerText = currentOperand;
        if (operation != null) {
            previousOperandTextElement.innerText = `${previousOperand} ${operation}`;
        } else {
            previousOperandTextElement.innerText = '';
        }
    };

    // Function to input a number
    const appendNumber = (number) => {
        if (number === '.' && currentOperand.includes('.')) return;
        if (currentOperand === '0' && number !== '.') {
            currentOperand = number;
        } else if (resetDisplay) {
            currentOperand = number;
            resetDisplay = false;
        } else {
            currentOperand += number;
        }
    }

    // Function to choose an operation
    const chooseOperation = (op) => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    // Function to compute the result
    const compute = () => {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '✕':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    alert("Cannot divide by zero");
                    clear();
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }

        // Round the result to avoid floating-point precision issues
        currentOperand = Math.round(computation * 1e10) / 1e10;
        operation = undefined;
        previousOperand = '';
        resetDisplay = true;
    }

    // Function to all clear the calculator
    const clear = () => {
        currentOperand = '0';
        previousOperand = '';
        operation = undefined;
        resetDisplay = false;
    }

    // Function to change the sign of the current operand
    const changeSign = () => {
        if (currentOperand === '0') return;
        currentOperand = (parseFloat(currentOperand) * -1).toString();
    }

    // function to calculate the percentage of the current operand
    const percentage = () => {
        if (currentOperand === '0') return;
        currentOperand = (parseFloat(currentOperand) / 100).toString();
    }

    // Animation effect to buttons when keyboard keys are pressed
    const triggerButtonAnimation = (btnText) => {
        buttons.forEach(button => {
            if (button.innerText === btnText) {
                button.classList.add('active');
                setTimeout(() => {
                    button.classList.remove('active');
                }, 100);
            }
        })
    }

    // Event for mouse click
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;
            handleInput(value);
        })
    })


    // Function to handle keyboard input
    const handleInput = (value) => {
        if (!isNaN(value) || value === '.') {
            appendNumber(value);
        } else if (value === 'AC') {
            clear();
        } else if (value === '±') {
            changeSign();
        } else if (value === '%') {
            percentage();
        } else if (value === '=') {
            compute();
        } else {
            chooseOperation(value);
        }
        updateDisplay();
    }

    // Event for keyboard input
    document.addEventListener('keydown', (event) => {
        const key = event.key;

        // Judge the number or decimal 
        if (key >= '0' && key <= '9' || key === '.') {
            handleInput(key);
            triggerButtonAnimation(key);
            return;
        }

        // Judge the operation or special keys
        switch (key) {
            case '+':
                handleInput('+');
                triggerButtonAnimation('+');
                break;
            case '-':
                handleInput('-');
                triggerButtonAnimation('-');
                break;
            case '*':
                handleInput('✕');
                triggerButtonAnimation('✕');
                break;
            case '/':
                event.preventDefault(); // Prevent default browser behavior for '/'
                handleInput('÷');
                triggerButtonAnimation('÷');
                break;
            case 'Enter':
            case '=':
                event.preventDefault();
                handleInput('=');
                triggerButtonAnimation('=');
                break;
            case 'Escape':
            case 'c':
            case 'C':
                handleInput('AC');
                triggerButtonAnimation('AC');
                break;
            case '%':
                handleInput('%');
                triggerButtonAnimation('%');
                break;
            case 'Backspace':
                // Handle backspace to delete the last character
                if (currentOperand.length > 1) {
                    currentOperand = currentOperand.slice(0, -1);
                } else {
                    currentOperand = '0';
                }
                updateDisplay();
                break;
        }
    });

});