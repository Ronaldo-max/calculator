import React, { useState } from "react";
import './style.css';

export default function Calculator () {

    const [num, setNum] = useState('0');
    const [oldNum, setOldNum] = useState('0');
    const [operator, setOperator] = useState();

    const clickButtonSet = (e) => {
        let buttonSet = e.target.name
        if(num === '0') {
            setNum(buttonSet);
        } else {
            setNum(num + buttonSet);
        }
    }

    const clickButtonOperator = (e) => {
        let operatorVar = e.target.name;
        setOperator(operatorVar);
        setOldNum(num);
        setNum('0');
    }

    const clear = () => {
        setNum('0')
    }

    const clearNum = () => {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }

    const porcent = () => {
        setNum(num/100)
    }

    const calculate = () => {
        if (operator === "/") {
            setNum(oldNum / num);
        } else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(oldNum));
        } else if (operator === "-") {
            setNum(oldNum - num);
        } else if (operator === "x") {
            setNum(oldNum * num);
        }
    }

    return (
        <div className="box">
            <div className="box-calc">

                <h1 className="result">{num}</h1>

                <button onClick={clear} className="top">AC</button>
                <button onClick={clearNum} className="top">+/-</button>
                <button onClick={porcent} className="top">%</button>
                <button name="+" onClick={clickButtonOperator} className="operator">+</button>

                <button name="1" onClick={clickButtonSet}>1</button>
                <button name="2" onClick={clickButtonSet}>2</button>
                <button name="3" onClick={clickButtonSet}>3</button>
                <button name="x" onClick={clickButtonOperator} className="operator">x</button>

                <button name="4" onClick={clickButtonSet}>4</button>
                <button name="5" onClick={clickButtonSet}>5</button>
                <button name="6" onClick={clickButtonSet}>6</button>
                <button name="-" onClick={clickButtonOperator} className="operator">-</button>

                <button name="7" onClick={clickButtonSet}>7</button>
                <button name="8" onClick={clickButtonSet}>8</button>
                <button name="9" onClick={clickButtonSet}>9</button>
                <button name="/" onClick={clickButtonOperator} className="operator">/</button>

                <button name="0" onClick={clickButtonSet}>0</button>
                <button name="." onClick={clickButtonSet}>.</button>
                <button name="=" id="equal" onClick={calculate} className="operator">=</button>
            </div>
        </div>
    )
}