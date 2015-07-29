var Fetch = require('whatwg-fetch');
var Config = require('../../config');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = Config.apiKey;

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + Config.clientId
      }
    })
    .then(function(response){
      return response.json();
    })
  }
};

//Intended use is to allow any part of our application to be able to call 
//the api like Api.get('images')

