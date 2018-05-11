(function(){
  'use strict'

  angular.module('app')
    .factory('CondutorService', CondutorService);

    CondutorService.$inject = ['$http'];

  function CondutorService($http) {
    
    function findAll() {
      return $http.get('/api/condutores')
        .then(function (response) {
          return response.data;
        });
    }

    function insert(registro) {
      return $http.post('/api/condutores', registro)
        .then(function(response) {
          return response.data;
        });
    }

    function remove(id) {
      return $http.delete('/api/condutores/' + id);
    }

    return {
      findAll: findAll,
      insert: insert,
      remove: remove
    };
  }

})();