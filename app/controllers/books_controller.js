var _ = require('underscore');

module.exports = {

  index: function(params, callback) {
    var spec = {
      collection: {collection: 'Books', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'books_index_view', result);
    });
  },

  show: function(params, callback) {
    var spec = {
      model: {model: 'Book', params: params},
      chapters: {collection: 'Chapters', params: { book: params.slug }}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'books_show_view', result);
    });
  }

};
