  angular.module('myApp', [])
            .controller("MainController", function($scope){
             
                $scope.customers = [{
                        name : "Sompop",
                        lastname:"Kulapalanont",
                        picture:"http://placehold.it/100x100",
                        address : "Bangkok far far away"
                    },
                    {
                        name : "Doodle",
                        lastname:"Kulapalanont",
                        picture:"http://placehold.it/130x130",
                        address : "Doobe doo be doo",
                        isPrivate:true
                    },
                    {
                        name : "Doom DOom",
                        lastname:"Kulapalanont",
                        picture:"http://placehold.it/200x200",
                        address : "Dooom di doom di doom"
                    }
                ]

                

                
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
            .directive('customerList', function(){
                return {
                    scope:{
                        customerName:'=name',
                        customerPicture:'=picture',
                        customerLastname:'=lastname',
                        customerInfo:'=info',
                    },
                    template:'<div class="row"><div class="col-md-2"><img src="{{customerPicture}}"></div><div class="col-md-10"><h3>{{customerName}} {{customerLastname}}</h3><p>{{customerInfo}}</p></div></div>'
                }


            })