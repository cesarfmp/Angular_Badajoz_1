class AppController {

    constructor ($scope) {
        this.$scope=$scope
    }

    $onInit () {
        this.user = {
            name:'Pepe',
            apellidos : 'Pérez',
        }; 
        this.curso='AngularJS';
    }

    borrar = function () {
        this.user.name='';
        console.dir(this);

    }
}

const precioTotal = precio => {return precio*1,22}

angular.module("appMain")
.controller("AppController", AppController)




