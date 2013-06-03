var _ = require('underscore');

module.exports = {

  show: function(params, callback) {
    var spec = {
      model:  {model: 'Chapter', params: {slug: params.slug + '_' + params.chapter}},
      verses: {collection: 'Verses', params: { book: params.slug, chapter: params.chapter }}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'chapters_show_view', result);
    });
  }

};
