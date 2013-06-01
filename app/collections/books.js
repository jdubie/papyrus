var Book = require('../models/book')
  , Base = require('./base');

module.exports = Base.extend({
  model: Book,
  url: '/books'
});
module.exports.id = 'Books';
