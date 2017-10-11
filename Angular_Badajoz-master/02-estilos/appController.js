angular.module("appMain")
.controller("AppController", AppController)

function AppController (){
    this.user = {
        name:'Pepe',
        apellidos : 'Pérez',
    }; 
    this.curso='AngularJS';

    this.borrar = function () {
        this.user.name='';
        console.dir(this);
    }
}


