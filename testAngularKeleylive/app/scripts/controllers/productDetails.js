'use strict';

angular.module('testCatalog')
  .controller('ProductsCtrl', function ($scope, $stateParams, product) {
    $scope.product = product;
  });