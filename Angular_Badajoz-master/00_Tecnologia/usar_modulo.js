import { hello } from "modulo"; 

var app = { 
	saludo : () => {
		hello("Carlos");
		}
	}
	
console.log(app.saludo())