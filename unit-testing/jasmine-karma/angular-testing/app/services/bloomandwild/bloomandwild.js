(function() {
  'use strict';

  angular.module('api.flowers', [])
  .factory('Flowers', function() {
    var Flowers = {};
    var flowerList = [
                  {
                     "id": '594',
                     "sku_id": 62,
                     "quantity": 1,
                     "amount": "15.00",
                     "order_type": "Subscription",
                     "as_addon_for_sku_id": null,
                     "remainder_amount": "0.0"
                  },
                  {
                     "id": '593',
                     "sku_id": 62,
                     "quantity": 3,
                     "amount": "50.00",
                     "order_type": null,
                     "as_addon_for_sku_id": null,
                     "remainder_amount": "0.0"
                  },
                  {
                     "id": '592',
                     "sku_id": 62,
                     "quantity": 6,
                     "amount": "100.00",
                     "order_type": null,
                     "as_addon_for_sku_id": null,
                     "remainder_amount": "0.0"
                  },
                  {
                     "id": '591',
                     "sku_id": 62,
                     "quantity": 12,
                     "amount": "195.00",
                     "order_type": null,
                     "as_addon_for_sku_id": null,
                     "remainder_amount": "0.0"
                  },
                  {
                     "id": '590',
                     "sku_id": 62,
                     "quantity": 26,
                     "amount": "415.00",
                     "order_type": null,
                     "as_addon_for_sku_id": null,
                     "remainder_amount": "0.0"
                  },
                  {
                     "id": '589',
                     "sku_id": 62,
                     "quantity": 52,
                     "amount": "795.00",
                     "order_type": null,
                     "as_addon_for_sku_id": null,
                     "remainder_amount": "0.0"
                  },
                  {
                     "id": '588',
                     "sku_id": 62,
                     "quantity": 1,
                     "amount": "20.00",
                     "order_type": null,
                     "as_addon_for_sku_id": null,
                     "remainder_amount": "0.0"
                  }
    ];

    Flowers.all = function() {
      return flowerList;
    };

    Flowers.findById = function(id) {
      return flowerList.find(function(flower) {
        return flower.id === id;
      });
    };

    return Flowers;
  });
})();
