<<<<<<< HEAD
"use strict";
/*
export default class Calculate
{
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    if (this.currentOperand === '' && this.previousOperand !== '') {
      this.currentOperand = this.previousOperand;
      this.previousOperand = '';
      this.operation = undefined;
    } else {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break
      case '-':
        computation = prev - current;
        break
      case '*':
        computation = prev * current;
        break
      case '÷':
        computation = prev / current;
        break
      default:
        return
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }

  updateFunnyDisplay() {
    let funny_current = parseFloat(this.currentOperand);
    if (isNaN(funny_current)) return
    this.currentOperandTextElement.innerText = this.getFunnyResult();
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }

  getFunnyResult() {
    let number = this.currentOperand
    let results = [
      `десь ${this.getDisplayNumber(Math.round(number/100*70))} чи ${this.getDisplayNumber(number)}, \
        ну може ${this.getDisplayNumber(Math.round(number/100*130))} і все буде добре`,
      `${this.getDisplayNumber(number)}, проте це не остаточно`,
      `наразі ${this.getDisplayNumber(number)}, та можемо домовитись`,
      `маємо ${this.getDisplayNumber(number)}, але воно тобі потрібно?`,
      `пропоную ${this.getDisplayNumber(number)}, а ти скільки?`,
      `буде ${this.getDisplayNumber(number)}, якщо тебе це влаштовує`
    ];
    return results[Math.floor(Math.random()*results.length)];
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateFunnyDisplay();
});

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
});
}*/
class Calculator {
    constructor(previousNumberOnOutput, currentNumberOnOutput) {
      this.previousNumberOnOutput = previousNumberOnOutput;
      this.currentNumberOnOutput = currentNumberOnOutput;
      this.operations = {
        '+': (previousVariable, currentVariable) => previousVariable + currentVariable,
        '-': (previousVariable, currentVariable) => previousVariable - currentVariable,
        '×': (previousVariable, currentVariable) => previousVariable * currentVariable,
        '÷': (previousVariable, currentVariable) => previousVariable / currentVariable,
      }
      this.clearOutput();
    }
  
    clearOutput() {
      this.previousNumber = "";
      this.currentNumber = "";
      this.operator = undefined;
    }
  
    deleteNumberFromOutput() {
      this.currentNumber = this.currentNumber.toString().slice(0, -1);
    }
  
    addNumberToOutput(number) {
      if (number === "." && this.currentNumber.includes(".")) return;
      this.currentNumber += number.toString();
    }
  
    chooseOperator(operator) {
      if (this.currentNumber === "") return;
      if (this.previousNumber !== "") this.calculateResult();
      this.operator = operator;
      this.previousNumber = this.currentNumber;
      this.currentNumber = "";
    }
  
    calculateResult() {
      const previousVariable = parseFloat(this.previousNumber);
      const currentVariable = parseFloat(this.currentNumber);
      if (isNaN(previousVariable) || isNaN(currentVariable)) return;
      this.currentNumber = this.operations[this.operator](previousVariable, currentVariable);
      this.operator = undefined;
      this.previousNumber = "";
    }
  
    updateOutput() {
      this.currentNumberOnOutput.textContent = this.currentNumber;
      if (this.operator !== undefined) {
        this.previousNumberOnOutput.textContent = `${this.previousNumber} ${this.operator}`;
      } else {
        this.previousNumberOnOutput.textContent = "";
      }
    }
  }
  
  const numberBtn = document.querySelectorAll("[data-number]");
  const operationBtn = document.querySelectorAll("[data-operation]");
  const equalBtn = document.querySelector("[data-equal]");
  const clearBtn = document.querySelector("[data-clear]");
  const deleteBtn = document.querySelector("[data-delete]");
  const previousNumberOnOutput = document.querySelector("[data-previous-number]");
  const currentNumberOnOutput = document.querySelector("[data-current-number]");
  
  const calculator = new Calculator(
    previousNumberOnOutput,
    currentNumberOnOutput
  );
  
  numberBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculator.addNumberToOutput(btn.textContent);
      calculator.updateOutput();
    });
  });
  
  operationBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculator.chooseOperator(btn.textContent);
      calculator.updateOutput();
    });
  });
  
  equalBtn.addEventListener("click", () => {
    calculator.calculateResult();
    calculator.updateOutput();
  });
  
  clearBtn.addEventListener("click", () => {
    calculator.clearOutput();
    calculator.updateOutput();
  });
  
  deleteBtn.addEventListener("click", () => {
    calculator.deleteNumberFromOutput();
    calculator.updateOutput();
=======
"use strict";
/*
export default class Calculate
{
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    if (this.currentOperand === '' && this.previousOperand !== '') {
      this.currentOperand = this.previousOperand;
      this.previousOperand = '';
      this.operation = undefined;
    } else {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break
      case '-':
        computation = prev - current;
        break
      case '*':
        computation = prev * current;
        break
      case '÷':
        computation = prev / current;
        break
      default:
        return
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }

  updateFunnyDisplay() {
    let funny_current = parseFloat(this.currentOperand);
    if (isNaN(funny_current)) return
    this.currentOperandTextElement.innerText = this.getFunnyResult();
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }

  getFunnyResult() {
    let number = this.currentOperand
    let results = [
      `десь ${this.getDisplayNumber(Math.round(number/100*70))} чи ${this.getDisplayNumber(number)}, \
        ну може ${this.getDisplayNumber(Math.round(number/100*130))} і все буде добре`,
      `${this.getDisplayNumber(number)}, проте це не остаточно`,
      `наразі ${this.getDisplayNumber(number)}, та можемо домовитись`,
      `маємо ${this.getDisplayNumber(number)}, але воно тобі потрібно?`,
      `пропоную ${this.getDisplayNumber(number)}, а ти скільки?`,
      `буде ${this.getDisplayNumber(number)}, якщо тебе це влаштовує`
    ];
    return results[Math.floor(Math.random()*results.length)];
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateFunnyDisplay();
});

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
});
}*/
class Calculator {
    constructor(previousNumberOnOutput, currentNumberOnOutput) {
      this.previousNumberOnOutput = previousNumberOnOutput;
      this.currentNumberOnOutput = currentNumberOnOutput;
      this.operations = {
        '+': (previousVariable, currentVariable) => previousVariable + currentVariable,
        '-': (previousVariable, currentVariable) => previousVariable - currentVariable,
        '×': (previousVariable, currentVariable) => previousVariable * currentVariable,
        '÷': (previousVariable, currentVariable) => previousVariable / currentVariable,
      }
      this.clearOutput();
    }
  
    clearOutput() {
      this.previousNumber = "";
      this.currentNumber = "";
      this.operator = undefined;
    }
  
    deleteNumberFromOutput() {
      this.currentNumber = this.currentNumber.toString().slice(0, -1);
    }
  
    addNumberToOutput(number) {
      if (number === "." && this.currentNumber.includes(".")) return;
      this.currentNumber += number.toString();
    }
  
    chooseOperator(operator) {
      if (this.currentNumber === "") return;
      if (this.previousNumber !== "") this.calculateResult();
      this.operator = operator;
      this.previousNumber = this.currentNumber;
      this.currentNumber = "";
    }
  
    calculateResult() {
      const previousVariable = parseFloat(this.previousNumber);
      const currentVariable = parseFloat(this.currentNumber);
      if (isNaN(previousVariable) || isNaN(currentVariable)) return;
      this.currentNumber = this.operations[this.operator](previousVariable, currentVariable);
      this.operator = undefined;
      this.previousNumber = "";
    }
  
    updateOutput() {
      this.currentNumberOnOutput.textContent = this.currentNumber;
      if (this.operator !== undefined) {
        this.previousNumberOnOutput.textContent = `${this.previousNumber} ${this.operator}`;
      } else {
        this.previousNumberOnOutput.textContent = "";
      }
    }
  }
  
  const numberBtn = document.querySelectorAll("[data-number]");
  const operationBtn = document.querySelectorAll("[data-operation]");
  const equalBtn = document.querySelector("[data-equal]");
  const clearBtn = document.querySelector("[data-clear]");
  const deleteBtn = document.querySelector("[data-delete]");
  const previousNumberOnOutput = document.querySelector("[data-previous-number]");
  const currentNumberOnOutput = document.querySelector("[data-current-number]");
  
  const calculator = new Calculator(
    previousNumberOnOutput,
    currentNumberOnOutput
  );
  
  numberBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculator.addNumberToOutput(btn.textContent);
      calculator.updateOutput();
    });
  });
  
  operationBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculator.chooseOperator(btn.textContent);
      calculator.updateOutput();
    });
  });
  
  equalBtn.addEventListener("click", () => {
    calculator.calculateResult();
    calculator.updateOutput();
  });
  
  clearBtn.addEventListener("click", () => {
    calculator.clearOutput();
    calculator.updateOutput();
  });
  
  deleteBtn.addEventListener("click", () => {
    calculator.deleteNumberFromOutput();
    calculator.updateOutput();
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
  });