// Nos creamos el saludo controller
class SaludoController {
    
        $onInit() {
           
            this.sName='Pepe';
            console.log(this);
        }
    
         // Nos definimos la funcion que borra el name
         btnBorrar() {
            this.sName= '';
        }
    }

    
angular.module("appModule")
.component('appSaludo', {
    templateUrl:'saludo-partial.html',
    controller: SaludoController,
    controllerAs: 'vm'
});