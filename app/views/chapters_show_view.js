var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'chapters_show_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.verses = this.options.verses;
    return data;
  }

});
module.exports.id = 'ChaptersShowView';
