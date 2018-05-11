(function(){
  'use strict'

  angular.module('app')
    .controller('RegistroCadController', RegistroCadController);

    RegistroCadController.$inject = ['RegistroService'];

  function RegistroCadController(RegistroService,) {
    var vm = this;

    vm.cadastro = {}
    vm.salvar = salvar; 

    function salvar() {
      RegistroService.insert(vm.cadastro)
          .then(function (data) {
            
          });
    }
  }

})();