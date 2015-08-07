var request = require('request');

module.exports = {
  getChallenge: function(req, res) {
    var options = {
      url: 'https://www.codewars.com/api/v1/code-challenges/valid-braces',
      headers: {
        'Authorization': 'TFp2KBBKWkDu_qCRyByV'
      }
    };
    
    request(options, function(error, response, body) {
      res.send(response.body);
    });
  }
};