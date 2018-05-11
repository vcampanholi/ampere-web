(function(){
  'use strict'

  angular.module('app')
    .controller('AparelhoListController', AparelhoListController);
  
    AparelhoListController.$inject = ['AparelhoService'];
  
  function AparelhoListController(AparelhoService) {
  
      var vm = this;
      vm.lista = [];
      vm.remove = remove;
  
      function inicializa() {
        AparelhoService.findAll()
          .then(function (data) {
            vm.lista = data;
          });
      }

      function remove(id) {
        if (confirm('Deseja realmente excluir o aparelho?')) {
          AparelhoService.remove(id)
          .then(function() {
            alert('Aparelho excluído com sucesso!!!');
            inicializa();
          });
        }
      }
      inicializa();
  }

})();