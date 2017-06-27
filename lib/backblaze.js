const request = require('superagent');
const config = require('../config.js');

const bb_api = 'https://api.backblazeb2.com/b2api/v1';

module.exports = class BackblazeClient {
  constructor() {
    if (config.account_id && config.application_key && config.bucket_id) {
      request
        .get()
    }
  }
}

function fetchAuthToken(account_id, application_key) {
  const ep = 'b2_authorize_account';
  request
    .get(`${bb_api}/${ep}`)
    .auth(account_id, application_key)
    .set('Accept', 'application/json')
    .end(function(res, err) {
      if (err) {
        console.log('Error', err);
        return;
      }
      console.log(res);
    })
}
