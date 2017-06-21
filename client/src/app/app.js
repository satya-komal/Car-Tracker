(function() {
  'use strict';

  angular.module("Tracker", ["ngRoute"]);

  angular.module("Tracker")
        .config(moduleConfig);

  moduleConfig.$inject = ['$routeProvider'];

  function moduleConfig($routeProvider) {

      $routeProvider
          .when('/vehicles', {
              templateUrl: 'app/views/vehicles.tmpl.html',
              controller: 'VehiclesController',
              controllerAs: 'vehiclesVm'
          })
          .when('/vehicles/:vin', {
              templateUrl: 'app/views/vehicle-detail.tmpl.html',
              controller: 'VehicleDetailController',
              controllerAs: 'vehicleDetailVm'
          })
          .when('/readings', {
              templateUrl: 'app/views/readings.tmpl.html',
              controller: 'ReadingsController',
              controllerAs: 'readingsVm'
          })

          .when('/readings/:vin', {
              templateUrl: 'app/views/reading-detail.tmpl.html',
              controller: 'ReadingDetailController',
              controllerAs: 'readingDetailVm'
          })
          .when('/alerts', {
              templateUrl: 'app/views/alerts.tmpl.html',
              controller: 'AlertsController',
              controllerAs: 'alertsVm'
          })
          .when('/alerts/:vin', {
              templateUrl: 'app/views/alert-detail.tmpl.html',
              controller: 'AlertDetailController',
              controllerAs: 'alertDetailVm'
          })
          .otherwise({
              redirectTo: ''
          });
      };
})();