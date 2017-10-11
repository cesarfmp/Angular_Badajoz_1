class AppMain {

    constructor($scope) {
        this.$scope = $scope;
    }

    $onInit () {
        this.nombre = '';
        this.nuevoPensamiento = '';
        this.aPensamientos = [];
        console.dir(this);
    }

    btnClic () {
        this.aPensamientos.push(this.nuevoPensamiento); 
        this.nuevoPensamiento = '';
         console.dir(this);
    }

}

angular.module("app")
.controller("AppMain", AppMain)


