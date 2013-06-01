var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'book_chapters_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.bookSlug = this.options.book;
    return data;
  }

});
module.exports.id = 'BookChaptersView';
