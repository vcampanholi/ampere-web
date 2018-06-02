(function () {
  angular.module('app', ['ui.router']);

  angular.module('app')
    .config(AppConfig);

  AppConfig.$inject = ['$stateProvider'];

  function AppConfig($stateProvider) {

    $stateProvider
    
      .state({
        name: 'aparelhoList',
        url: '/aparelhos',
        templateUrl: '/app/aparelhos/aparelhos-list/aparelho-list.html',
        controller: 'AparelhoListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'aparelhoNovo',
        url: '/aparelhos/novo',
        templateUrl: '/app/aparelhos/aparelhos-cad/aparelho-cad.html',
        controller: 'AparelhoCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'aparelhoEditar',
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
      .state({
        name: 'condutorEditar',
        url: '/condutores/{id}',
        templateUrl: '/app/condutores/condutores-cad/condutor-cad.html',
        controller: 'CondutorCadController',
        controllerAs: 'vm'
      })
  }
})();