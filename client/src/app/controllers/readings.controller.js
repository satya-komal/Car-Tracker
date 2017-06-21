(function() {
  'use strict';

  angular.module("Tracker")
    .controller('ReadingsController', ReadingsController);

  ReadingsController.$inject = ['readingService'];

  function ReadingsController(readingService) {
    var readingsVm = this;

      readingService.getReadings().then(function (response) {
          readingsVm.readings = response;
          console.log(response);
      },function (error) {
          console.log(error);
      });


      readingsVm.changeSort = changeSort;

      init();

      function init() {
          console.log('ReadingssController');

          readingsVm.sorter = {
              by: 'Vin',
              reverse: false
          };

          readingService
              .getReadings()
              .then(function(readings) {
                  readingsVm.readings = readings;
              }, function(error) {
                  console.log(error);
              });
      }

      function changeSort(prop) {
          readingsVm.sorter.by = prop;
          readingsVm.sorter.reverse = !readingsVm.sorter.reverse;
      }
  }
})();