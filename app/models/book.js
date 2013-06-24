var Base = require('./base');

module.exports = Base.extend({
  url: '/books/:slug',
  idAttribute: 'slug',

  defaults: {
    isOldTestament: function () {
      return this.get('test') == 'old';
    },
    isNewTestament: function () {
      return this.get('test') == 'new';
    },

    /*
     * Old Testament
     */
    isLaw: function () { return this.get('klass') == 'law'; },
    isHistory: function () { return this.get('klass') == 'history'; },
    isPoetryWisdom: function () { return this.get('klass') == 'poetry_wisdom'; },
    isMajorProphets: function () { return this.get('klass') == 'prophets-major'; },
    isMinorProphets: function () { return this.get('klass') == 'prophets-minor'; },

    /*
     * New Testament
     */
    isGospels: function () { if (this.get('klass')) return this.get('klass').match('gospel'); },
    isEpistlesPauline: function () { return this.get('klass') == 'epistles-pauline'; },
    isEpistlesPastoral: function () { return this.get('klass') == 'epistles-pastoral'; },
    isEpistlesGeneral: function () { return this.get('klass') == 'epistles-general'; },
    isRevelation: function () { return this.get('klass') == 'revelation'; }
  }

});
module.exports.id = 'Book';
