(function () {
  angular.module('app', ['ui.router', 'ui.utils.masks']);

  angular.module('app')
    .config(AppConfig);

  AppConfig.$inject = ['$stateProvider'];

  function AppConfig($stateProvider) {

    $stateProvider
      .state({
        name: 'usuarioList',
        url: '/usuarios',
        templateUrl: '/app/usuario/usuario-list/usuario-list.html',
        controller: 'UsuarioListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'usuarioNovo',
        url: '/usuarios/novo',
        templateUrl: '/app/usuario/usuario-cad/usuario-cad.html',
        controller: 'UsuarioCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'usuarioEditar',
        url: '/usuarios/{id}',
        templateUrl: '/app/usuario/usuario-cad/usuario-cad.html',
        controller: 'UsuarioCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'aparelhoList',
        url: '/aparelhos',
        templateUrl: '/app/aparelho/aparelho-list/aparelho-list.html',
        controller: 'AparelhoListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'aparelhoNovo',
        url: '/aparelhos/novo',
        templateUrl: '/app/aparelho/aparelho-cad/aparelho-cad.html',
        controller: 'AparelhoCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'aparelhoEditar',
        url: '/aparelhos/{id}',
        templateUrl: '/app/aparelho/aparelho-cad/aparelho-cad.html',
        controller: 'AparelhoCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'condutorList',
        url: '/condutores',
        templateUrl: '/app/condutor/condutor-list/condutor-list.html',
        controller: 'CondutorListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'condutorNovo',
        url: '/condutores/novo',
        templateUrl: '/app/condutor/condutor-cad/condutor-cad.html',
        controller: 'CondutorCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'condutorEditar',
        url: '/condutores/{id}',
        templateUrl: '/app/condutor/condutor-cad/condutor-cad.html',
        controller: 'CondutorCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'calculoCorrenteList',
        url: '/calculos-corrente',
        templateUrl: '/app/calculo-corrente/calculo-corrente-list/calculo-corrente-list.html',
        controller: 'CalculoCorrenteListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'calculoCorrenteNovo',
        url: '/calculos-corrente/novo',
        templateUrl: '/app/calculo-corrente/calculo-corrente-cad/calculo-corrente-cad.html',
        controller: 'CalculoCorrenteCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'calculoCorrenteEditar',
        url: '/calculos-corrente/{id}',
        templateUrl: '/app/calculo-corrente/calculo-corrente-cad/calculo-corrente-cad.html',
        controller: 'CalculoCorrenteCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'calculoCargaList',
        url: '/calculos-carga',
        templateUrl: '/app/calculo-carga/calculo-carga-list/calculo-carga-list.html',
        controller: 'CalculoCargaListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'calculoCargaNovo',
        url: '/calculos-carga/novo',
        templateUrl: '/app/calculo-carga/calculo-carga-cad/calculo-carga-cad.html',
        controller: 'CalculoCargaCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'calculoCargaEditar',
        url: '/calculos-carga/{id}',
        templateUrl: '/app/calculo-carga/calculo-carga-cad/calculo-carga-cad.html',
        controller: 'CalculoCargaCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'calculoCircuitoList',
        url: '/calculos-circuito',
        templateUrl: '/app/calculo-circuito/calculo-circuito-list/calculo-circuito-list.html',
        controller: 'CalculoCircuitoListController',
        controllerAs: 'vm'
      })
      .state({
        name: 'calculoCircuitoNovo',
        url: '/calculos-circuito/novo',
        templateUrl: '/app/calculo-circuito/calculo-circuito-cad/calculo-circuito-cad.html',
        controller: 'CalculoCircuitoCadController',
        controllerAs: 'vm'
      })
      .state({
        name: 'calculoCircuitoEditar',
        url: '/calculos-circuito/{id}',
        templateUrl: '/app/calculo-circuito/calculo-circuito-cad/calculo-circuito-cad.html',
        controller: 'CalculoCircuitoCadController',
        controllerAs: 'vm'
      })

  }
})();