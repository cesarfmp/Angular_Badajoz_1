/*'use strict';

/**
 * @ngdoc overview
 * @name 03cProyectoYoApp
 * @description
 * # 03cProyectoYoApp
 *
 * Main module of the application.
 */
// 2) Inyectamos el modulo de LocalStorageModule
angular
  .module('appModule', [
    'LocalStorageModule'
  ])  
  // 3) Configuramos el proveedor
  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    // 4) Le ponemos un prefijo (no tiene porque ponerse)
    localStorageServiceProvider.setPrefix('ls')
  }])