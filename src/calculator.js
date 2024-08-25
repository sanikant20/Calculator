import React, { useState } from 'react';
import { create, all } from 'mathjs';

// Create a mathjs instance
const math = create(all);

const Calculator = () => {
    const [display, setDisplay] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setDisplay(display + value);
    };

    const handleClear = () => {
        setDisplay('');
        setResult('');
    };

    const handleBackspace = () => {
        setDisplay(display.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            const calculatedResult = math.evaluate(display);
            setResult(calculatedResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="display-input">{display}</div>
                <div className="display-result">{result}</div>
            </div>
            <div className="buttons">
                <button onClick={handleClear}>C</button>
                <button onClick={handleBackspace}>&larr;</button>
                <button onClick={() => handleClick('%')}>%</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('(')}>(</button>
                <button onClick={() => handleClick(')')}>)</button>
                <button onClick={() => handleClick('0')} className="zero">0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={handleCalculate}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
