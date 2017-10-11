// Nos creamos el saludo controller
class HijoController {
    
        $onInit() {
           
            this.sName='Pepe';
            console.log(this);
            this.oDatos = this.parent.oDatos;
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
    require: {
        parent: '^appPadre',
    }
});