var Base = require('./base');

module.exports = Base.extend({
  url: '/chapters/:slug',
  idAttribute: 'slug'
});
module.exports.id = 'Chapter';
