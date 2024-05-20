const {executeQuery} = require("../../mysql_functions");

function createReview(request, h) {
	const response = new Promise(async (resolve, _) => {
		const {username, comment, rating} = request.payload

		if ([username, comment, rating].some(v => v === undefined || v === "")) {
			resolve(h.response({
				code: 10,
				message: "No todos los datos fueron ingresados"
			}).code(300));
			return;
		}

		const crearReviewQuery = 'insert into review (username, comment, fecha, rating) values (?, ?, NOW(), ?);'
		const crearReviewResult = await executeQuery(crearReviewQuery, [username, comment, rating]);

		console.log("Resultado de crear review:", crearReviewResult);

		resolve(h.response({
			code: 0,
			message: 'Review registrado con exito'
		}).code(200));

	})
	return response.then(data => data);
}

module.exports = {createReview}