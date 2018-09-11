(function() {
  'use strict';
  angular.module('public')
  .controller('SignupController', SignupController);

  // SignupController.$inject = ['menuItems'];
  function SignupController() {
    var signupCtrl = this;
    signupCtrl.test = 'good';
    signupCtrl.firstname = '';
    signupCtrl.lastname = '';
    signupCtrl.email = '';
    signupCtrl.phone = '';
  }

})();
