(function () {
  'use strict'

  angular.module('app')
    .controller('AparelhoCadController', AparelhoCadController);

  AparelhoCadController.$inject = ['AparelhoService', '$state', '$stateParams', 'DialogBuilder'];

  function AparelhoCadController(AparelhoService, $state, $stateParams, DialogBuilder) {

    var vm = this;
    vm.cadastro = {};
    vm.error = {};
    vm.cadastro.tensao = 220;

    vm.salvar = salvar;

    if ($stateParams.id) {
      AparelhoService.findById($stateParams.id)
        .then(function (data) {
          vm.cadastro = data;
        });
    }

    function salvar() {
      if (!vm.cadastro.id) {
        AparelhoService.insert(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Aparelho inserido com sucesso!');
            $state.go("aparelhoList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      } else {
        AparelhoService.update(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Aparelho alterado com sucesso!');
            $state.go("aparelhoList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      }
    }

  }
})();