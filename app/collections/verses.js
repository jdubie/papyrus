var Verse = require('../models/verse')
  , Base = require('./base');

module.exports = Base.extend({
  model: Verse,
  url: '/verses'
});
module.exports.id = 'Verses';
