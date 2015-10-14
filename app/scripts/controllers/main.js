'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
 .controller('MainCtrl', function($scope){
        var baseURL='http://placeimg.com/640/480/';
        $scope.setInterval=5000;
        $scope.slides=[
        {
            title:'known wildlife',
            image:baseURL+'animals',
            text:'Animales'
        },
        {
            title:'Nature',
            image:baseURL+'nature',
            text:'known the nature'
        },   {
            title:'TECH',
            image:baseURL+'tech',
            text:'help to programing'
        }
        ];
 });
