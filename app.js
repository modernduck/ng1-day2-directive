  angular.module('myApp', [])
            .controller("MainController", function($scope){
             
                $scope.customer1 = {
                    name : "Sompop",
                    address : "Bangkok far far away"
                }

                $scope.customer2 = {
                    name : "Doodle",
                    address : "Doobe doo be doo",
                    isPrivate:true
                }

                $scope.customer3 = {
                    name : "Doom DOom",
                    address : "Dooom di doom di doom"
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
                    template:"<div>Name {{customerInfo.name}}</div><div ng-hide='customerInfo.isPrivate'> address {{customerInfo.address}}</div>"

                }

            })