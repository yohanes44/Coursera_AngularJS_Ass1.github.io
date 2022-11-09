(function () {
        'use strict';
    
        angular
            .module('LunchCheck', [])
            .controller('LunchCheckController', ctrlFunction)
    
            ctrlFunction.$inject = ['$scope'];
    
        function ctrlFunction($scope) {
            // var $ctrl = this;
             $scope.totDish = 7;
    $scope.msg = "Let US See";
    $scope.checkResult = function (totFoood){

        var totFoodNum =  totFoood.split(",").length;
        $scope.msg = "checking.....!";

          if(totFoodNum < 4){
            $scope.msg = "Enjoy!";
          }
          else{
            $scope.msg = "Too much!";
          }
    }

    
        }
    
    }());

// var LunchCheck = angular.module('LunchCheck')
// app.controller('LunchCheckController', ["$scope", function($scope){


//     $scope.totDish = 7;
//     $scope.msg = "Let US See";
//     $scope.checkResult = function (totFoood){

//         var totFoodNum =  totFoood.split(",").length;
//         $scope.msg = "checking.....!";

//           if(totFoodNum < 4){
//             $scope.msg = "Enjoy!";
//           }
//           else{
//             $scope.msg = "Too much!";
//           }
//     }

// }])
