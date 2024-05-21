const {executeQuery} = require("../../mysql_functions");

function getAllCountries(request, h) {
	const response = new Promise(async (resolve, _) => {
		console.log("Datos en el link:", request.query)
		const {username} = request.query
		console.log("Usuario que solicita:", username);


		const obtenerPaisesQuery = "select * from country;";
		const obtenerPaisesResult = await executeQuery(obtenerPaisesQuery, []);

		resolve(h.response({
			code: 0,
			message: 'Info retrieved successfully',
			countries: obtenerPaisesResult
		}).code(200));

	})
	return response.then(data => data);
}

module.exports = {getAllCountries}