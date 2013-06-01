var Base = require('./base');

module.exports = Base.extend({
  url: '/books/:slug',
  idAttribute: 'slug'
});
module.exports.id = 'Book';
