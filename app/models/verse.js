var Base = require('./base');

module.exports = Base.extend({
  url: '/verses/:slug',
  idAttribute: 'slug'
});
module.exports.id = 'Verse';
