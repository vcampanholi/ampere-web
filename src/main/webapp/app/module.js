(function () {
  angular.module('app', ['ui.router']);

  angular.module('app')
    .config(AppConfig);

  AppConfig.$inject = ['$stateProvider'];

  function AppConfig($stateProvider) {

    $stateProvider
    
      .state({
        name: 'aparelhosList',
        url: '/aparelhos',
        templateUrl: '/app/aparelhos/aparelhos-list/aparelho-list.html',
        controller: 'AparelhoListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'aparelhosNovo',
        url: '/aparelhos/novo',
        templateUrl: '/app/aparelhos/aparelhos-cad/aparelho-cad.html',
        controller: 'AparelhoCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'aparelhosEditar',
        url: '/aparelhos/{id}',
        templateUrl: '/app/aparelhos/aparelhos-cad/aparelho-cad.html',
        controller: 'AparelhoCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'condutorList',
        url: '/condutores',
        templateUrl: '/app/condutores/condutores-list/condutor-list.html',
        controller: 'CondutorListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'condutorNovo',
        url: '/condutores/novo',
        templateUrl: '/app/condutores/condutores-cad/condutor-cad.html',
        controller: 'CondutorCadController',
        controllerAs: 'vm'
      })
  }
})();