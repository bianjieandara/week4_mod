(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'category_component.html',
      controller: 'categoriesController as categoriesCtrl'
    })
    .state('items', {
      url: '/items/{category}',
      templateUrl: 'items_component.html',
      controller: 'itemsController as itemsCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.category)
                  .then(function (items) {
                    return items.data.menu_items;
                  });
              }]
      }
    })

}


})();
