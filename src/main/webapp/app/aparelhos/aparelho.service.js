(function(){
  'use strict'

  angular.module('app')
    .factory('AparelhoService', AparelhoService);

    AparelhoService.$inject = ['$http'];

  function AparelhoService($http) {
    
    function findAll() {
      return $http.get('/api/aparelhos')
        .then(function (response) {
          return response.data;
        });
    }

    function insert(registro) {
      return $http.post('/api/aparelhos', registro)
        .then(function(response) {
          return response.data;
        });
    }

    function remove(id) {
      return $http.delete('/api/aparelhos/' + id);
    }

    return {
      findAll: findAll,
      insert: insert,
      remove: remove
    };
  }

})();