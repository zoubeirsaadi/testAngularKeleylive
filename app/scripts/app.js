'use strict';

angular
  .module('testCatalog', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          products: function($q, Product) {
            var def = $q.defer();
            Product.query().then(function (data) {
              def.resolve(data);
            });
            return def.promise;
          }
        }
      })
      .state('productDetails', {
      url: '/products/{productId}',
      templateUrl: 'views/productdetails.html',
      controller: 'ProductsCtrl',
      resolve: {
        product: function ($q, $stateParams, Product) {
          var def = $q.defer();
          Product.get($stateParams.productId).then(function (data) {
            def.resolve(data);
          });
          return def.promise;
        }
      }
    })
  });
