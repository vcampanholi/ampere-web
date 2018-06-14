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
      vm.cadastro.protecao = calculaProtecao(item);
      vm.cadastro.diametroCondutor = calculaCondutor(vm.cadastro.protecao);
    }

    function calculaProtecao(item) {
      if (item.corrente <= 1.8) return 2;
      if (item.corrente > 1.8 && item.corrente <= 3.6 ) return 4;
      if (item.corrente > 3.6 && item.corrente <= 5.6) return 6;
      if (item.corrente > 5.6 && item.corrente <= 9.4) return 10;
      if (item.corrente > 9.4 && item.corrente <= 15.2) return 16;
      if (item.corrente > 15.2 &&item.corrente <= 19) return 20;
      if (item.corrente > 19 && item.corrente <= 23) return 25;
      if (item.corrente > 23 && item.corrente <= 30) return 32;
      if (item.corrente > 30 && item.corrente <= 36) return 40;
      if (item.corrente > 36 && item.corrente <= 45) return 50;
      if (item.corrente > 45 && item.corrente <= 58) return 63;
      if (item.corrente > 58 && item.corrente <= 85) return 115;
    }

    function calculaCondutor(corrente) {
      if (corrente <= 10) return 0.5;
      if (corrente > 10 && corrente <=12) return 0.75;
      if (corrente > 12 && corrente <= 15) return 1;
      if (corrente > 15 && corrente <= 19) return 1.5;
      if (corrente > 19 && corrente <= 26) return 2.5;
      if (corrente > 26 && corrente <= 35 ) return 4;
      if (corrente > 35 && corrente <= 45) return 6;
      if (corrente > 45 && corrente <= 61) return 10;
      if (corrente > 61 && corrente <= 81) return 16;
      if (corrente > 81 && corrente <= 106) return 25;
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