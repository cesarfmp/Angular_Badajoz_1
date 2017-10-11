angular.module('appModule')
// 5) Inyectamos el servicio 'localStorageService'
.controller('AppController', ["$scope", 'localStorageService', function ($scope, localStorageService) {
    
   	$scope.sEmpresa = "CAS Training"
    // con get obtenemos el valor del localStorage
    var tempTareas = localStorageService.get('tareas');

    $scope.aTareas = tempTareas && tempTareas.split('\n') || [];
    
    // $scope tiene la propiedad $watch para variables y $wactchCollection para variables de tipo coleccion
    // Con eso vigilamos los cambios en variables
    $scope.$watchCollection('aTareas', function () {
      // con add añadimos
      localStorageService.add('tareas', $scope.aTareas.join('\n'));   
      }, true);

    $scope.addTarea = function () {
      $scope.aTareas.push($scope.sTarea);
      $scope.sTarea = "";
    }

    $scope.eliminarTarea = function (index) {
      $scope.aTareas.splice(index,1)
    }

  }]);
