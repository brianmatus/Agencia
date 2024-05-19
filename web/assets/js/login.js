const form = document.getElementById("loginForm");
form.addEventListener("submit", function (e) {
	e.preventDefault();
	userLogin();
})

function userLogin() {
	console.log("Boton login presionado");

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	const data = {
		username: username,
		password: password
	}

	fetch(API_BASE_URL + "/user/login", {
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
			alert("Inicio de sesion con exito");

			response.json().then( data => {
				localStorage.setItem("username", username);
				localStorage.setItem("nombres", data.datos_perfil.nombres);
				localStorage.setItem("apellidos", data.datos_perfil.apellidos);

				setTimeout(function () {
					window.location.href = '/principal.html';
				}, 100);
			});
		}
	})

}
