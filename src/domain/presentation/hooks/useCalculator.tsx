import {useEffect, useRef, useState} from 'react';
import {validationCase} from '../../useCase/validationCase';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '/',
}

export const useCalculator = () => {
  const INITALCOUNT: string = '0';

  const [number, setNumber] = useState(INITALCOUNT);
  const [previous, setPrevious] = useState(INITALCOUNT);
  const [operation, setOperation] = useState('');
  

  useEffect(() => {
    if( lastOperation.current)
    {
      const firstPart = operation.split(' ').at(0);
      setOperation(`${firstPart} ${lastOperation.current} ${number}`);
    } else {
      setOperation(`${number}`);
    }

  }, [number])
  

  useEffect(() => {
    const response = calculateResult();
    setPrevious(`${response}`);
  }, [operation])
  



  const lastOperation = useRef<Operator>();

  const buildNumber = (numberString: string) => {
    const response = validationCase({
      number,
      numberString,
      initialCount: INITALCOUNT,
    });

    !response ? setNumber(numberString) : setNumber(number + numberString);
  };

  const setLastNumber = () => {

    number.endsWith('.')
      ? setPrevious(number.slice(0, -1))
      : setPrevious(number);

    setNumber(INITALCOUNT);
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const arithmeticOperation = () => {

    const response = calculateResult();

    setOperation(`${response}`);
   
    lastOperation.current = undefined;
    setPrevious(INITALCOUNT);
  };


  const calculateResult= ():number => {
    const [ firstValue,operator,secondValue ] = operation.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if( isNaN(num1) ) return num1;

    switch (operator) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
    }

    return 0;
  }

  const resetValues = () => {
    setNumber(INITALCOUNT) 
    setPrevious(INITALCOUNT);
  };

  const deleteNumber = () => {
    number.length === 1
      ? setNumber(INITALCOUNT)
      : setNumber(number.slice(0, -1));
  };

  return {
    // Properties
    number,
    previous,
    operation,

    // Methods
    buildNumber,
    resetValues,
    deleteNumber,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    arithmeticOperation,
  };
};
