// Nos creamos el saludo controller
class HijoController {
    
        $onInit() {
           
            console.log(this);
            
        }
    
         // Nos definimos la funcion que borra el name
         btnBorrar() {
            this.sName= '';
        }
    }

    
angular.module("appModule")
.component('appHijo', {
    templateUrl:'./main/hijo-partial.html',
    controller: HijoController,    
    bindings : {
        oDatos: '='
    }
});