(function() {
  'use strict';

  angular.module("Tracker")
    .controller('VehiclesController', VehiclesController);

    VehiclesController.$inject = ['vehicleService'];

  function VehiclesController(vehicleService) {
    var vehiclesVm = this;

   /* vehicleService.getVehicles()
        .then(function (vehicles) {
          vehiclesVm.vehicles = vehicles;
          console.log(response);
           },function (error) {
            console.log(error);
        });*/

    vehiclesVm.changeSort = changeSort;

    init();

    function init() {
      console.log('VehiclesController');

      vehiclesVm.sorter = {
        by: 'Vin',
        reverse: false
      };

        vehicleService
        .getVehicles()
        .then(function(vehicles) {
          vehiclesVm.vehicles = vehicles;
        }, function(error) {
          console.log(error);
        });
       }

    function changeSort(prop) {
      vehiclesVm.sorter.by = prop;
      vehiclesVm.sorter.reverse = !vehiclesVm.sorter.reverse;
    }
  }
})();