//Creates an object to keep track of values.
const calculator = {
    //This will display '0' on the calculator screen.
    Display_Value: '0',
    First_Operant: null,
    Wait_Second_Operarant: false,
    operator: null,
};

//This modifies values each time a button is clicked on.
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operant } = Calculator;
    if (Wait_Secind_Operant === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operant = false;
    } else {
        //This overwrites Display_Value if the current value is 0
        //otherwise it adds onto it.
        Calculator.Display_Value = Display_Value === '0'? digit : Display_Value + digit;
    }
}

//This section handles decimal points.
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operant === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//This section handles Operators
function Handle_Operator(next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;   
    } else if (operator) 
        const Value_Now = First_Operand || 0;

        let result = Perform_Calculator[operator](Value_Now, Value_of_Input);
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);

}
const perform_Calculator = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0',
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//This function updates the calculator screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.Value);
        Update_Display();
        return;
    }

    //Ensures that AC clears all inputs from the Calculator screen.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Display(target.value);
    Update_Display();
})
