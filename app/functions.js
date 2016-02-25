exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
        return str + ', ' + str2;
      }
  },

  makeClosures : function(arr, fn) {
    var fArr = [];
      var func = function(i) {
        return function() {
          return fn(arr[i]);
        }
      };
      for (var i=0; i<arr.length; i++) {
        fArr[i] = func(i);
      }
      return fArr;
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
