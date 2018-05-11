(function(){
  'use strict'

  angular.module('app')
    .controller('CondutorCadController', CondutorCadController);

    CondutorCadController.$inject = ['CondutorService'];

  function CondutorCadController(CondutorService) {
    var vm = this;

    vm.cadastro = {}
    vm.salvar = salvar; 

    function salvar() {
        CondutorService.insert(vm.cadastro)
          .then(function (data) {
              alert('Condutor ' + data.descricao + ' inserido com sucesso!!!');
              vm.cadastro = {};
          });
    }
  }

})();