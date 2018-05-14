(function () {
'use strict';

angular.module('data')
.controller('categoriesController', categoriesController)
.controller('itemsController', itemsController);


categoriesController.$inject = ['MenuDataService'];
function categoriesController(MenuDataService) {
  var ctrl = this;

  ctrl.categories = [];

  ctrl.$onInit = function () {
    MenuDataService.getAllCategories()
    .then(function (result) {
      ctrl.categories = result.data;
    });
  };
}
function itemsController(items) {
  var ctrl = this;
  ctrl.items = items;
}

})();
