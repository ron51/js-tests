exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var itemFound = false;
    for(var i = 0; i < arr.length; i++){
      if(item === arr[i]){
        itemFound = true;
        return i;
      }
    }
    if(itemFound === false){
      return -1;
    }
  },

  sum : function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] == item){
        var removedItem = arr.splice(i,1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var occurences = 0;
    for(var i = 0; i < arr.length; i++){
      if(item === arr[i]){
        occurences++;
      }
    }
    return occurences;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
