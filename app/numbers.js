exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >> bit - 1) & 1;
  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {

  }
};
