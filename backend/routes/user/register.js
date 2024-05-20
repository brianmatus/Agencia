const { generateSHA256Hash } = require('../../general');
const {executeQuery} = require("../../mysql_functions");

function userRegister(request, h) {
	const response = new Promise(async (resolve, _) => {

		const {username, password, nombres, apellidos, email, telefono1, telefono2} = request.payload
		if ([username, password, nombres, apellidos, email].some(v => v === undefined || v === "")) {
			resolve(h.response({
				code: 10,
				message: "No todos los datos fueron ingresados"
			}).code(300));
			return;
		}


		//Verificar que el usuario no exista

		const usuarioExisteQuery = 'SELECT COUNT(*) as count from user where username = ?';
		const usuarioExisteResult = await executeQuery(usuarioExisteQuery, [username]);

		if (usuarioExisteResult[0]["count"] !== 0) {
			resolve(h.response({
				code: 2,
				message: "Ya existe un usuario con este username"
			}).code(300));
			return;
		}

		const hashPasswordIngresada = generateSHA256Hash(password);

		const registrarUsuarioQuery = 'insert into user (username, hashed_password, nombres, apellidos, email, telefono1, telefono2) values (?, ?, ?, ?, ?, ?, ?);'

		const registrarUsuarioResult = await executeQuery(registrarUsuarioQuery, [username, hashPasswordIngresada, nombres, apellidos, email, telefono1, telefono2])

		console.log("Resultado de registrar usuario:", registrarUsuarioResult);

		resolve(h.response({
			code: 0,
			message: "Registro con exito",
		}).code(200));


	})
	return response.then(data => data);
}

module.exports = {userRegister}
