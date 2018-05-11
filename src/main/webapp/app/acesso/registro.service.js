(function(){
  'use strict'

  angular.module('app')
    .factory('RegistroService', RegistroService);

    RegistroService.$inject = ['$http'];

  function RegistroService($http) {

    function insert(registro) {
      return $http.post('/api/usuarios', registro)
        .then(function(response) {
          return response.data;
        });
    }

    function remove(id) {
      return $http.delete('/api/usuarios/' + id);
    }

    return {
      insert: insert,
      remove: remove
    };
  }

})();