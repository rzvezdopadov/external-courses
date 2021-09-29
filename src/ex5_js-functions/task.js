const Calculator = () => {
  let result = 0;

  const add = (a = 0) => {
    result += a;

    return add;
  };

  const subtract = (a = 0) => {
    result -= a;

    return subtract;
  };

  const divide = (a = 1) => {
    result /= a;

    return divide;
  };

  const multiply = (a = 1) => {
    result *= a;

    return multiply;
  };

  const getResult = () => result;

  const reset = () => {
    result = 0;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
};

const calculator = Calculator();

module.exports = calculator;
