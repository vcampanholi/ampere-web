(function(){
    angular.module('app', ['ui.router']);

    angular.module('app')
      .config(AppConfig);

    AppConfig.$inject = ['$stateProvider'];

    function AppConfig($stateProvider) {

        $stateProvider
          .state({
            name: 'Index',
            url: '/index',
            templateUrl: '/index.html'
          })
          .state({
            name: 'Login',
            url: '/login',
            templateUrl: '/app/acesso/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
          })
          .state({
            name: 'AparelhosList',
            url: '/aparelhos',
            templateUrl: '/app/aparelhos/aparelhos-list/aparelho-list.html',
            controller: 'AparelhoListController',
            controllerAs: 'vm'
          })
          .state({
            name: 'AparelhosNovo',
            url: '/aparelhos/novo',
            templateUrl: '/app/aparelhos/aparelhos-cad/aparelho-cad.html',
            controller: 'AparelhoCadController',
            controllerAs: 'vm'
          })
          .state({
            name: 'CondutorList',
            url: '/condutores',
            templateUrl: '/app/condutores/condutores-list/condutor-list.html',
            controller: 'CondutorListController',
            controllerAs: 'vm'
          })
          .state({
            name: 'CondutorNovo',
            url: '/condutores/novo',
            templateUrl: '/app/condutores/condutores-cad/condutor-cad.html',
            controller: 'CondutorCadController',
            controllerAs: 'vm'
          })
    }
})();