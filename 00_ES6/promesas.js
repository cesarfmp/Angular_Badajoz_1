function msgAfterTimeout (msg, who, timeout) {
    // retorna la promesa
    return new Promise((resolve, reject) => {
        // En vez de un timeout es una llamada Ajax
        setTimeout(
			() => resolve(`${msg} Hello ${who}!`), 
			timeout)
	})
}

msgAfterTimeout("", "Foo", 100)
//Si va bien devuelve bar
.then((msg) =>
	msgAfterTimeout(msg, "Bar", 200))
.then((msg) => {
	console.log(`done after 300ms:${msg}`)
})