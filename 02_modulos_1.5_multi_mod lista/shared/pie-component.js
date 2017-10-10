class PieController {
    
    // Inyeccion de dependecias
    constructor() {}

    // Es el constructor, para evitar los problemas de instaciacion
    $onInit() {
        this.sCurso = "Angular JS";
    };    

   
    //$onChanges (changesObj) { };
    //$onDestroy() { };
}

// Nos creamos un componente para la cabecera que va a pertenecer al modulo shared
// Para hacer referencia a este componente usamos app-cabeza por llamarse AppCabeza
// Podemos usar la plantilla directamente en vez de la url
angular.module('sharedModule')
        .component('appPie', {
            template:`<br/>--------------------------<br/>
                    Curso de {{$ctrl.sCurso | uppercase}}`,
            controller: PieController,
            //controllerAs: '$ctrl',  --> por defecto usar $ctrl
        });

    