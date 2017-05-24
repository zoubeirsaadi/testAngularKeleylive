'use strict';

angular.module('testCatalog')
  .component('productListItem', {
    templateUrl: 'views/productlistitem.html',
    bindings: {
      'product': '<'
    }
  });