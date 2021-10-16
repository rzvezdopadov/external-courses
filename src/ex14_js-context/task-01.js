function Calculator(a) {
  const result = 0;

  this.a = a;

  this.result = result;
}

Calculator.prototype = {
  add(a = 0) {
    this.result += a;

    return this;
  },

  subtract(a = 0) {
    this.result -= a;

    return this;
  },

  divide(a = 1) {
    this.result /= a;

    return this;
  },

  multiply(a = 1) {
    this.result *= a;

    return this;
  },

  getResult() {
    return this.result;
  },

  reset() {
    this.result = 0;

    return this;
  },

  setState(a = 0) {
    this.result = a;

    return this;
  },

  fetchData(callback) {
    this.callback = callback(500);

    return this;
  },
};

const calculator = new Calculator();

module.exports = calculator;
