(function() {
  'use strict';

  angular.module("Tracker")
    .service('readingService', readingService);

  readingService.$inject = ['$http', '$q', 'CONFIG'];

    function readingService($http, $q,CONFIG) {
        var self = this;
        self.getReadings = getReadings;
        self.getReadingsById = getReadingsById;

        function getReadings() {
            return $http.get(CONFIG.API_HOST +'/readings')
                .then(successFn,errorFn);
        };

        function getReadingsById(vin) {
            return $http.get(CONFIG.API_HOST + '/readings/' + vin)
                .then(successFn,errorFn);
        };

        function successFn(response) {
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('ERROR: ' + response.statusText);
        }
    }
})();