// Nos definimos una nueva clase
class MainController {
        
    // Es el constructor que se ejecuta un poquito despues
    // Es posterior al renderizado
    // Enlaces => se ejecuta lo que le diga en el inicio
    $onInit() {
      
        this.sCurso='AngularJS';

    }
   
}

angular.module("appModule")
.component('appMain', {
    templateUrl:'./main/main-partial.html',
    controller: MainController,
    controllerAs: 'vm'
});