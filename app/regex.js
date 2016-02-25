exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var pattern = /\d/;
    return pattern.test(str);
  },

  containsRepeatingLetter : function(str) {

  },

  endsWithVowel : function(str) {

  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
