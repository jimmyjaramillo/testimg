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
        var baseURL='http://lorempixel.com/960/450/';
        $scope.setInterval=5000;
        $scope.slides=[
        {
            title:'Aprende  mantenerte en forma',
            image:baseURL+'sports/',
            text:'Practica Deporte'
        },
        { 
            title:'Buena Alimentacion',
            image:baseURL+'food/',
            text:'Alimentate muy bien es bueno'
        },   { 
            title:'Naturaleza',
            image:baseURL+'nature/',
            text:'Ayuda a Programar'
        }
        ];
         var baseURL='http://lorempixel.com/200/200/';
         $scope.contenido=[
        {
            title:'Sobre Nosotros',
            img:baseURL+'technics/3',
            summary:'IOET'
        },
        { 
            title:'Servicios',
            img:baseURL+'business',
            summary:'IOET'
        },   { 
            title:'Contactos',
            img:baseURL+'transport',
            summary:'IOET'
        }
        ];

 });
