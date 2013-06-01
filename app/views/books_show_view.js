var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'books_show_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.chapters = this.options.chapters;
    return data;
  }

});
module.exports.id = 'BooksShowView';
