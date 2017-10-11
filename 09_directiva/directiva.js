// Tercera aproximación al formato "1.5"
// Se define el controller como una clase

angular.module('appModule')

.directive("appCabeza", function() {
	return {
		restrict : "AE",       
		template: `<header>{{$ctrl.sTitulo}}</header>`,
		scope : true,
		controllerAs : "$ctrl",
		link: function(scope, elem, attrs) {
			console.log(scope);
			console.log(elem);

			elem[0].innerHTML +="<p>Esto lo añade la directiva</p>"
		}

	}
}) // Fin de la directiva cabeza