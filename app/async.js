exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var deferred = $.Deferred();
    window.setTimeout(function(){
      deferred.resolve(value);
    }, 0);
    return deferred.promise();
  },

  manipulateRemoteData : function(url) {
    var get = $.ajax({
      url: url
    });

    get.done(function(response){
      var peopleArray = [];
        for (var person in response.people){
          peopleArray.push(response.people[person].name);
        }
        peopleArray = peopleArray.sort();
    });
  }
};
