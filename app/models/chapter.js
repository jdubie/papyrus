var Base = require('./base'),
    _ = require('underscore');

module.exports = Base.extend({
  url: '/chapters/:slug',
  idAttribute: 'slug',

  defaults: {
    slugBook: function () {
      return this.get('slug').split('_')[0];
    }
  }

});
module.exports.id = 'Chapter';
