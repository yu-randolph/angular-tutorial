angular.
  module('core').
  filter('checkmark', function() {
    return function(input) {
      return input ? 'fa fa-check' : 'fa fa-times';
    };
  });
