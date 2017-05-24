  angular.module('myApp', [])
            .controller("MainController", function($scope){
             
                $scope.customer = {
                    name : "Sompop",
                    address : "Bangkok far far away"
                }

            } )
            .directive('myCustomer', function(){
                //return directive object
                //E for element  A for Attribute
                return {
                    restict :'E',
                    scope : {
                        customerInfo : '=info'
                    },
                    template:"Name {{customerInfo.name}} address {{customerInfo.address}}"

                }

            })