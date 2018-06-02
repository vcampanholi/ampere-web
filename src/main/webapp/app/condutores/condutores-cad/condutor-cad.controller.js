(function(){
  'use strict'

  angular.module('app')
    .controller('CondutorCadController', CondutorCadController);

    CondutorCadController.$inject = ['CondutorService', '$state', '$stateParams', 'DialogBuilder'];

  function CondutorCadController(CondutorService, $state, $stateParams, DialogBuilder) {
    
    var vm = this;
    vm.cadastro = {};
    vm.error = {};

    vm.salvar = salvar;

    if ($stateParams.id) {
      CondutorService.findById($stateParams.id)
        .then(function (data) {
          vm.cadastro = data;
        });
    }

    function salvar() {
      if (!vm.cadastro.id) {
        CondutorService.insert(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Condutor inserido com sucesso!');
            $state.go("condutorList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      } else {
        CondutorService.update(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Condutor alterado com sucesso!');
            $state.go("condutorList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      }
    }

  }

})();