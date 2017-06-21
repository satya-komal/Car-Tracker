(function() {
  'use strict';

  angular.module("Tracker")
    .service('vehicleService', vehicleService);

    vehicleService.$inject = ['$http', '$q', 'CONFIG'];

  function vehicleService($http, $q,CONFIG) {
    var self = this;
    self.getVehicles = getVehicles;
    self.getVehicleById = getVehicleById;

    function getVehicles() {
        return $http.get(CONFIG.API_HOST +'/vehicles')
              .then(successFn,errorFn);
      };

    function getVehicleById(vin) {
          return $http.get(CONFIG.API_HOST + '/vehicles/'+ vin)
              .then(successFn, errorFn);
      }

    function successFn(response) {
      return response.data;
    }

    function errorFn(response) {
      return $q.reject('ERROR: ' + response.statusText);
    }
  }
})();