(function () {
  'use strict'

  angular.module('app')
    .controller('UsuarioListController', UsuarioListController);

  UsuarioListController.$inject = ['UsuarioService', 'DialogBuilder'];

  function UsuarioListController(UsuarioService, DialogBuilder) {

    var vm = this;
    vm.lista = {};
    vm.filtro = '';
    vm.page = {
      number: 1,
      size: '15'
    }
    vm.convertEnum = convertEnum; 

    vm.atualizar = inicializa;
    vm.resetFiltro = function () {
      vm.filtro = '';
      inicializa();
    }

    vm.goToPage = function (page) {
      vm.page.number = page;
      inicializa();
    }

    function inicializa() {
      UsuarioService.findAll(vm.filtro, vm.page)
        .then(function (data) {
          vm.lista = data;
        });
    }

    vm.excluir = function (item) {
      DialogBuilder.confirm('Tem certeza que deseja remover o registro?')
        .then(function (result) {
          if (result.value) {
            UsuarioService.remove(item.id)
              .then(function () {
                DialogBuilder.message('Registro excluído com sucesso!');
                inicializa();
              });
          } else {
            DialogBuilder.message({
              title: 'Exclusão cancelada pelo usuário!',
              type: 'error'
            });
          }
        });
    }

    function convertEnum(str) {
      var texto = String(str);
      return texto.substr(0, 1).toUpperCase() + texto.substr(1).toLocaleLowerCase();
    }

    inicializa();
  }

})();