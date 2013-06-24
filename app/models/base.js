var RendrBase = require('rendr/shared/base/model'),
    _ = require('underscore');

module.exports = RendrBase.extend({
  get: function(attr) {
    var value = RendrBase.prototype.get.call(this, attr);
    return _.isFunction(value) ? value.call(this) : value;
  },
    toJSON: function() {
      var data = {};
      var json = RendrBase.prototype.toJSON.call(this);
      _.each(json, function(value, key) {
        data[key] = this.get(key);
      }, this);
      return data;
    }
});
