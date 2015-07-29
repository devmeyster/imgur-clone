var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions], //if any actions get called and you have a method with the same call, call the method
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(json){
        this.topics = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.topics);
    //broadcasting to the entire app, event and info we want to share
  }
});