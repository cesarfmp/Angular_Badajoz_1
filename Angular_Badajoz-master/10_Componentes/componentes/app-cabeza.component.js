class AppCabeza {

    $onInit () {
        this.sTitulo = "Componentes en Angular 1.6";
    }

} // Fin de la clase AppCabeza


angular.module('appPrueba')
.component("appCabeza", {
    //require: {'parent' : 'MainController'},
    templateUrl : 'componentes/app-cabeza.template.html',
    /* 
    template :
    `
    <div class="row">	
        <header class="col-xs-6 col-xs-offset-3">
            <h1>{{$ctrl.sTitulo}}</h1>
        </header>
    </div>
    `, 
    */
    controller : AppCabeza,
})
