  angular.module('myApp', [])
            .controller("MainController", function($scope){
             
                $scope.customer = {
                    name : "Sompop",
                    address : "Bangkok far far away"
                }

            } )
            .directive('myCustomer', function(){
                //return directive object
                return {
                    template:"Name {{customer.name}} address {{customer.address}}"

                }

            })