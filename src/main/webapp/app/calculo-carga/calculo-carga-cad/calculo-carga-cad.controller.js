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
    vm.changeAparelho = changeAparelho;
    vm.calcular = calcular;

    function calcular(item) {
      vm.cadastro.protecao = calculaProtecao();
      vm.cadastro.diametroCondutor = calculaCondutor();
    }

    function calculaProtecao() {
      return 1;

    }

    function calculaCondutor() {
      return 2;
    }

    function changeAparelho(aparelho) {
      if (aparelho) {
        var tensao = aparelho.tensao;
        var potencia = aparelho.potencia;
        var calculoCorrente = (potencia / tensao);
        vm.cadastro.corrente = Number(calculoCorrente.toFixed(2));
        
        vm.cadastro.protecao = undefined;
        vm.cadastro.diametroCondutor = undefined
      }
    }

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
            $state.go("calculoCargaList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      } else {
        CalculoCargaService.update(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Cálculo alterado com sucesso!');
            $state.go("calculoCargaList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      }
    }

  }
})();