'use strict';

angular.module('testCatalog')
  .factory('Product', function ($http, $q) {
    var json = $http.get('/data/products.json').then(function (response) {
      return response.data;
    });

    return {
        // return all products
      query: function() {
        return json;
      },
      // return a single product by its unique id
      get: function(id) {
        var q = $q.defer();

        json.then(function (items) {
          angular.forEach(items, function (item) {
            if (id == item.id) {
              q.resolve(item);
              return;
            }
          })
        });

        return q.promise;
      }
    };
  });