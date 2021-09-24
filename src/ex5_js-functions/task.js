const Calculator = () => {
  let result = 0;

  const add = (a = 0) => {
    result += a;
    let c;
    const f = (b = 0) => {
      if (b !== undefined) { result += b; }
      c = b;
      return f;
    };
    if (c === undefined) return add;
    return f;
  };

  const subtract = (a = 0) => {
    result -= a;
    let c;
    const f = (b) => {
      if (b !== undefined) { result -= b; }
      c = b;
      return f;
    };
    if (c === undefined) return subtract;
    return f;
  };

  const divide = (a = 1) => {
    result /= a;
    let c;
    const f = (b) => {
      if (b !== undefined) { result /= b; }
      c = b;
      return f;
    };
    if (c === undefined) return divide;
    return f;
  };

  const multiply = (a = 1) => {
    result *= a;
    let c;
    const f = (b) => {
      if (b !== undefined) { result *= b; }
      c = b;
      return f;
    };
    if (c === undefined) return multiply;
    return f;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult: () => result,
    reset: () => { result = 0; },
  };
};

const calculator = Calculator();

module.exports = calculator;
