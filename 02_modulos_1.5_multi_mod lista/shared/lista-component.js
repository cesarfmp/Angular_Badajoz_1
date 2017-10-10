class ListaController {
    
    // Inyeccion de dependecias
    constructor() {}

    // Es el constructor, para evitar los problemas de instaciacion
    $onInit() {
        //this.nombreNuevo = ""; // No hace falta porque hay ya unng-model que lo inicializa
        this.arrayAutores = [{
            nombre: 'Georges',
            apellido:'Simenon',
            genero: 'policiaco',
            pais: 'France'
        },{
            nombre: 'Lucas',
            apellido:'Perruno',
            genero: 'ficcion',
            pais: 'España'
        }];    
    };    

}

// Nos creamos un componente para la cabecera que va a pertenecer al modulo shared
// Para hacer referencia a este componente usamos app-cabeza por llamarse AppCabeza
// Podemos usar la plantilla directamente en vez de la url
angular.module('sharedModule')
        .component('appLista', {
            templateUrl:'./shared/lista-partial.html',
            controller: ListaController,
            //controllerAs: '$ctrl',  --> por defecto usar $ctrl
        });

    