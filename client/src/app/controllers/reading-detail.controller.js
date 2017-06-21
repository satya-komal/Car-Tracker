(function() {
    'use strict';

    angular.module('Tracker')
        .controller('ReadingDetailController', ReadingDetailController);

    ReadingDetailController.$inject = ['readingService','$routeParams'];

    function ReadingDetailController(readingService,$routeParams) {
        var readingDetailVm = this;

        /*readingService.getReadingsById($routeParams.vin).then(function (response) {
            console.log(response);
        },function (error) {
            console.log(error);
        });*/

        init();

        function init() {
            console.log('ReadingDetailController');

            readingService
                .getReadingsById($routeParams.vin)
                .then(function (readings){
                    readingDetailVm.readings = readings;
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();