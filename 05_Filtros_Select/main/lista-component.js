class ListaController {
    
    $onInit () {
    
        this.opcion = {};

        this.provincias=[
            {idProvincia:2, nombre:"Castellón"},
            {idProvincia:3, nombre:"Alicante"},
            {idProvincia:1, nombre:"Valencia"},
            {idProvincia:7, nombre:"Teruel"},  
            {dProvincia:5, nombre:"Tarragona"}
            ];
        this.miProvinciaSeleccionada = null;    
    }
}
    
angular.module("appModule")
.component('appLista', {
    templateUrl: './main/lista-partial.html',
    controller: ListaController
});