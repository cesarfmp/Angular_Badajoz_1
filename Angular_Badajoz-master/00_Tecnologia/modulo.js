module "sample" { 

	export hello = (nombre) => {
		return "Hola " + nombre;
	}
}