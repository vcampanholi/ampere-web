(function () {
  'use strict'

  angular.module('app')
    .controller('UsuarioCadController', UsuarioCadController);

    UsuarioCadController.$inject = ['UsuarioService', '$scope', '$state', '$stateParams', 'DialogBuilder'];

  function UsuarioCadController(UsuarioService, $scope, $state, $stateParams, DialogBuilder) {

    $scope.selectedItem = undefined;
    $scope.getSelectedText = function () {
      if ($scope.selectedItem !== undefined) {
        return $scope.selectedItem;
      }
    };

    var vm = this;
    vm.cadastro = {};
    vm.error = {};

    vm.salvar = salvar;

    if ($stateParams.id) {
      UsuarioService.findById($stateParams.id)
        .then(function (data) {
          vm.cadastro = data;
        });
    }

    function salvar() {
      if (!vm.cadastro.id) {
        UsuarioService.insert(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Usuário inserido com sucesso!');
            $state.go("usuarioList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      } else {
        UsuarioService.update(vm.cadastro)
          .then(function (dado) {
            DialogBuilder.message('Usuário alterado com sucesso!');
            $state.go("usuarioList");
          })
          .catch(function (error) {
            vm.error = error.data;
          });
      }
    }
  }
})();