(function(){
  'use strict'

  angular.module('app')
    .controller('CondutorListController', CondutorListController);
  
    CondutorListController.$inject = ['CondutorService'];
  
  function CondutorListController(CondutorService) {
  
      var vm = this;
      vm.lista = [];
      vm.remove = remove;
  
      function inicializa() {
        CondutorService.findAll()
          .then(function (data) {
            vm.lista = data;
          });
      }

      function remove(id) {
        if (confirm('Deseja realmente excluir o condutor?')) {
          CondutorService.remove(id)
          .then(function() {
            alert('Condutor excluído com sucesso!!!');
            inicializa();
          });
        }
      }
      inicializa();
  }

})();