// Nos creamos el saludo controller
class HijoController {
    constructor($scope) {
        this.$scope = $scope;
    }
       
    $onInit() {
         console.log(this);
        
    }

        // Nos definimos la funcion que borra el name
        btnBorrar() {
        console.debug("borrar");
        this.oDatos.nombre= '';
        this.$scope.$emit("evtBorrado");
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