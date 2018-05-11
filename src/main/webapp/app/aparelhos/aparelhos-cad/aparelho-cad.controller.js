(function(){
  'use strict'

  angular.module('app')
    .controller('AparelhoCadController', AparelhoCadController);

    AparelhoCadController.$inject = ['AparelhoService'];

  function AparelhoCadController(AparelhoService) {
    var vm = this;

    vm.cadastro = {}
    vm.salvar = salvar; 

    function salvar() {
        AparelhoService.insert(vm.cadastro)
          .then(function (data) {
              alert('Aparelho ' + data.descricao + ' inserido com sucesso!!!');
              vm.cadastro = {};
          });
    }

  }

})();