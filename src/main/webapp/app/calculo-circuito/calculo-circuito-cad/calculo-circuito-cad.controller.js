(function () {
  'use strict'

  angular.module('app')
    .controller('CalculoCircuitoCadController', CalculoCircuitoCadController);

    CalculoCircuitoCadController.$inject = [
      'CalculoCircuitoService',
      '$state',
      '$stateParams',
      'DialogBuilder',
      'AparelhoService'
  ];

  function CalculoCircuitoCadController(CalculoCircuitoService, $state, $stateParams, DialogBuilder, AparelhoService) {

      var vm = this;
      vm.cadastro = {
          itens: []
      };

      vm.error = {};
      vm.aparelhos = [];
      
      vm.salvar = salvar;
      
      vm.itemOriginal = null;
      vm.itemLista = {};

      vm.excluirAparelho = excluirAparelho;
      vm.editarAparelho = editarAparelho;
      vm.salvarAparelho = salvarAparelho;
      vm.novoAparelho = novoAparelho;

      AparelhoService.findAllOver()
        .then(function (data) {
          vm.aparelhos = data;
      })

      if ($stateParams.id) {
        CalculoCircuitoService.findById($stateParams.id)
          .then(function (data) {
              vm.cadastro = data;
              vm.cadastro.itens = vm.cadastro.itens || [];
          });
      }

      function salvar() {
          if (!vm.cadastro.id) {
              CalculoCircuitoService.insert(vm.cadastro)
                .then(function (dado) {
                    DialogBuilder.message('Registro incluído com sucesso!');
                    $state.go('calculoCircuitoList');
                })
                .catch(function (error) {
                    vm.error = error.data;
                });
          } else {
            CalculoCircuitoService.update(vm.cadastro)
              .then(function (dado) {
                  DialogBuilder.message('Registro alterado com sucesso!');
                  $state.go('calculoCircuitoList');
              })
              .catch(function (error) {
                  vm.error = error.data;
              });
          } 
      }

      function novoAparelho() {
          vm.itemOriginal = null;
          vm.itemLista = {};
      }

      function editarAparelho(item) {
          vm.itemOriginal = item;
          angular.copy(item, vm.itemLista);
      }

      function salvarAparelho() {

          var index = vm.cadastro.itens.indexOf(vm.itemOriginal);
          if (index != -1) {
              vm.cadastro.itens[index] = vm.itemLista;
          } else {
              vm.cadastro.itens.push(vm.itemLista);
          }
          vm.itemOriginal = null;
          vm.itemLista = {};

          vm.cadastro.potencia = 0;
          vm.cadastro.itens.forEach(function (item) {
            vm.cadastro.potencia += item.aparelho.potencia;
          });
          calcularCorrente(vm.cadastro.potencia);
      }

      function excluirAparelho(item) {
          var index = vm.cadastro.itens.indexOf(item);
          vm.cadastro.itens.splice(index, 1);

          vm.cadastro.potencia = 0;
          vm.cadastro.itens.forEach(function (item) {
            vm.cadastro.potencia += item.aparelho.potencia;
          });
          calcularCorrente(vm.cadastro.potencia);
      }

      function calcularCorrente(potencia) {
        var calculoCorrente = (potencia / 220);
        vm.cadastro.corrente = Number(calculoCorrente.toFixed(2));
      }

  }
})();