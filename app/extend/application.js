const Yhsd = require('../lib/yhsd-api');

let yhsd;
module.exports = {
  get yhsd() {
    yhsd = yhsd || new Yhsd(this.config.yhsd);
    return yhsd;
  },
};