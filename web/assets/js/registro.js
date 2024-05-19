const form = document.getElementById("formRegistro");
form.addEventListener("submit", function (e) {
	e.preventDefault();
	console.log("Boton registro presionado");

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const nombres = document.getElementById('nombres').value;
	const apellidos = document.getElementById('apellidos').value;
	const email = document.getElementById('email').value;
	const telefono1 = document.getElementById('telefono').value;
	const telefono2 = document.getElementById('telefono2').value;

	const data = {
		username: username,
		password: password,
		nombres: nombres,
		apellidos: apellidos,
		email: email,
		telefono1: telefono1,
		telefono2: telefono2,
	}

	fetch(API_BASE_URL + "/user/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}).then(response => {
		if (!response.ok) {


			response.json().then( data => {
				alert("Error al mandar solicitud: " + data.message);
				console.log(data);
			})


		} else {
			alert("Usuario registrado con exito");
			response.json().then( data => {
				console.log(response);
				window.location.href = '/login.html'
			})
		}
	})

})
