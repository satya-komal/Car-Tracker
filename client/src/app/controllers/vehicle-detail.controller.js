(function() {
  'use strict';

  angular.module('Tracker')
    .controller('VehicleDetailController', VehicleDetailController);

    VehicleDetailController.$inject = ['vehicleService','$routeParams','readingService','alertService'];

  function VehicleDetailController(vehicleService,$routeParams,readingService,alertService) {
    var vehicleDetailVm = this;

    /* vehicleService.getVehicleById($routeParams.vin)
         .then(function (vehicle) {
         vehicleDetailVm.vehicle = vehicle;
         //console.log(vehicle);
      },function (error) {
          console.log(error);
      });*/

     init();

      function init() {
          console.log('VehicleDetailController');
          vehicleService
              .getVehicleById($routeParams.vin)
              .then(function (vehicle){
                  vehicleDetailVm.vehicle = vehicle;
               },function (error) {
                  console.log(error);
              });
          }
      }
})();