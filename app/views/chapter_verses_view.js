var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'chapter_verses_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.bookSlug   = this.options.book;
    data.chapterNum = this.options.chapter;
    return data;
  }

});
module.exports.id = 'ChapterVersesView';
