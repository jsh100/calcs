/**
 * Pure JavaScript Calculator
 * Using function constructors (ES5 compatible)
 */

function Calculator() {
    this.previousValue = null;
    this.currentValue = '';
    this.operation = null;
}

/**
 * Add a number to the current value
 */
Calculator.prototype.appendNumber = function(num) {
    if (num === '.' && this.currentValue.includes('.')) {
        return;
    }
    this.currentValue += num;
    return this.currentValue;
};

/**
 * Set the operation
 */
Calculator.prototype.setOperation = function(op) {
    if (this.currentValue === '') return;

    this.previousValue = parseFloat(this.currentValue);
    this.operation = op;
    this.currentValue = '';
};

/**
 * Perform the calculation
 */
Calculator.prototype.calculate = function() {
    if (this.operation === null || this.previousValue === null || this.currentValue === '') {
        return this.currentValue;
    }

    var current = parseFloat(this.currentValue);
    var result;

    switch (this.operation) {
        case '+':
            result = this.previousValue + current;
            break;
        case '-':
            result = this.previousValue - current;
            break;
        case '*':
            result = this.previousValue * current;
            break;
        case '/':
            if (current === 0) {
                throw new Error('Cannot divide by zero!');
            }
            result = this.previousValue / current;
            break;
        case '%':
            result = this.previousValue % current;
            break;
        case '^':
            result = Math.pow(this.previousValue, current);
            break;
        default:
            return this.currentValue;
    }

    this.currentValue = result.toString();
    this.operation = null;
    this.previousValue = null;

    return result;
};

/**
 * Clear the calculator
 */
Calculator.prototype.clear = function() {
    this.previousValue = null;
    this.currentValue = '';
    this.operation = null;
};

/**
 * Delete the last character
 */
Calculator.prototype.deleteLast = function() {
    if (this.currentValue.length > 0) {
        this.currentValue = this.currentValue.slice(0, -1);
    }
};

/**
 * Get the current display value
 */
Calculator.prototype.getDisplay = function() {
    return this.currentValue || '0';
};

/**
 * Interactive CLI Calculator
 */
function startCalculator() {
    var calc = new Calculator();
    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function displayMenu() {
        console.log('\n' + Array(41).join('='));
        console.log('Display: ' + calc.getDisplay());
        console.log(Array(41).join('='));
    }

    function processInput(input) {
        input = input.toLowerCase().trim();

        try {
            if (input === 'q') {
                console.log('Goodbye!');
                rl.close();
                return false;
            } else if (input === 'c') {
                calc.clear();
                console.log('Cleared!');
            } else if (input === 'd') {
                calc.deleteLast();
                console.log('Deleted!');
            } else if (/^[0-9]$/.test(input)) {
                calc.appendNumber(input);
            } else if (input === '.') {
                calc.appendNumber('.');
            } else if (['+', '-', '*', '/', '%', '^'].includes(input)) {
                calc.setOperation(input);
            } else if (input === '=') {
                var result = calc.calculate();
                console.log('Result: ' + result);
            } else {
                console.log('Invalid input!');
            }

            return true;
        } catch (error) {
            console.log('Error: ' + error.message);
            return true;
        }
    }

    console.log('\nJAVASCRIPT CALCULATOR');
    console.log('Commands: [0-9] [+, -, *, /, %, ^] [.] [=] [c] [d] [q]');
    displayMenu();

    function askQuestion() {
        rl.question('> ', function(input) {
            if (processInput(input)) {
                displayMenu();
                askQuestion();
            }
        });
    }

    askQuestion();
}

// Run the calculator
if (require.main === module) {
    startCalculator();
}

module.exports = Calculator;