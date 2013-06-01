module.exports = function(match) {
  match('',               'books#index');
  match(':slug',          'books#show');
  match(':slug/:chapter', 'chapters#show');
};
