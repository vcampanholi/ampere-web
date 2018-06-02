(function () {
  'use strict'

  angular.module('app')
    .controller('CalculoCargaCadController', CalculoCargaCadController);

    CalculoCargaCadController.$inject = ['CalculoCargaService', '$state', '$stateParams', 'DialogBuilder', 'AparelhoService'];

  function CalculoCargaCadController(CalculoCargaService, $state, $stateParams, DialogBuilder, AparelhoService) {

    var vm = this;
    vm.cadastro = {};
    vm.error = {};
    vm.aparelhos = [];

    vm.salvar = salvar;

    AparelhoService.findAllOver()
    .then(function (data) {
      vm.aparelhos = data;
    })

    if ($stateParams.id) {
      CalculoCargaService.findById($stateParams.id)
        .then(function (data) {
          vm.cadastro = data;
        });
    }

    function salvar() {
      if (!vm.cadastro.id) {
        CalculoCargaService.insert(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Cálculo inserido com sucesso!');
            $state.go("cargaList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      } else {
        CalculoCargaService.update(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Cálculo alterado com sucesso!');
            $state.go("cargaList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      }
    }

  }
})();