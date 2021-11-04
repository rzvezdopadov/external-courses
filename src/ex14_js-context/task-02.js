function Hangman(str) {
  this.guessStr = str;
  this.yesLetter = [];
  this.wrongLetter = [];
  this.attempt = 6;
}

Hangman.prototype = {
  guess(letter) {
    const newStr = this.guessStr.replace(RegExp(`[${letter}]`, 'g'), '');
    if (this.guessStr.length === newStr.length) {
      this.wrongLetter.push(letter);
      this.attempt -= 1;
      return `wrong letter, errors left ${this.attempt} | ${this.wrongLetter}`;
    }
    this.yesLetter.push(letter);
    return `${this.guessStr.replace(RegExp(`[^${this.yesLetter}]`.replace(',', ''), 'g'), '_')}`;
  },
  getStatus() {
    return `${this.guessStr.replace(RegExp(`[^${this.yesLetter}]`.replace(',', ''), 'g'), '_')}`
      + ` | errors left ${this.attempt}`;
  },
  startAgain(str) {
    this.guessStr = str;
    this.yesLetter = [];
    this.wrongLetter = [];
    this.attempt = 6;
  },
  getGuessedString() {
    return this.guessStr.replace(RegExp(`[^${this.yesLetter}]`.replace(',', ''), 'g'), '_');
  },
  getErrorsLeft() {
    return this.attempt;
  },
  getWrongSymbols() {
    return this.wrongLetter;
  },
};

const hangman = new Hangman('webpurple');

module.exports = hangman;
