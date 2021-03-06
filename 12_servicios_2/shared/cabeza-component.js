class CabezaController {
    
    // Inyeccion de dependecias
    constructor() {
        
    }

    // Es el constructor, para evitar los problemas de instaciacion
    $onInit() {
        this.sTitulo = "Hola Mundo";

       
    
    };    
    
    //$onChanges (changesObj) { };
    //$onDestroy() { };
}

// Nos creamos un componente para la cabecera que va a pertenecer al modulo shared
// Para hacer referencia a este componente usamos app-cabeza por llamarse AppCabeza
// Podemos usar la plantilla directamente en vez de la url
angular.module('sharedModule')
        .component('appCabeza', {
            template:`<header>
                        <h1>{{$ctrl.sTitulo.toUpperCase()}}</h1>
                    </header>`,
            controller: CabezaController,
            //controllerAs: '$ctrl',  --> por defecto usar $ctrl
        });

    