const {executeQuery} = require("../../mysql_functions");

function getInfo(request, h) {
	const response = new Promise(async (resolve, _) => {
		const {id} = request.query

		const obtenerPaisQuery = "select * from country where id = ?;";
		const obtenerPaisResult = await executeQuery(obtenerPaisQuery, [id]);

		//TODO verificar que el pais si exista


		resolve(h.response({
			code: 0,
			message: 'Info retrieved successfully',
			data: obtenerPaisResult[0]
		}).code(200));

	})
	return response.then(data => data);
}

module.exports = {getInfo}