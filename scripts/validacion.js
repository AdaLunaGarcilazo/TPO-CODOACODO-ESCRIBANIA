const form = document.getElementById("form")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const mensaje = document.getElementById("textarea")
const submit = document.getElementById("submit")
const aviso = document.getElementById("aviso")



/*Función que colorea de verde cuando la página cargó y el campo
esta lleno o si el usuario terminó de completarlo, y colorea
de blanco si el usuario borra completamente el valor del campo. 
*/
const chequear = (elemento) => {
	// Chequear si hubo refresh y quedo lleno el campo, para colorear
	elemento.value.trim() ? elemento.style.borderColor = "#338822" : null;


	//Chequear a partir del evento change
	elemento.addEventListener("change", e => {
		if (e.target.value.trim()) {
			e.target.style.borderColor = "#338822";
			aviso.innerHTML = ""
		}


	})


	elemento.addEventListener("input", e => {
		if (!e.target.value.trim()) {
			e.target.style.borderColor = "#bbb";
			
		}
	})
}

const marcarError = elemento => {
	if (!elemento.value.trim()) {
		elemento.style.borderColor = "#ed4e6c";
	}
}

chequear(nombre)
chequear(apellido)
chequear(email)
chequear(mensaje)

submit.addEventListener("click", e => {
	e.preventDefault();
	if (nombre.value.trim() && apellido.value.trim() && email.value.trim() && mensaje.value.trim()) {
		aviso.style.color = "#338822"

		aviso.innerHTML = "Enviando mensaje..."
		setTimeout(() => {
			nombre.value = ""
			apellido.value = ""
			email.value = ""
			mensaje.value = ""
			document.location.reload()
			
		}, 3000)
	}

	else {
		marcarError(nombre)
		marcarError(apellido)
		marcarError(email)
		marcarError(mensaje)
		aviso.innerHTML = "Todos los campos son obligatorios"
	}
})
