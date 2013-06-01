var Chapter = require('../models/chapter')
  , Base    = require('./base');

module.exports = Base.extend({
  model: Chapter,
  url: '/chapters'
});
module.exports.id = 'Chapters';
