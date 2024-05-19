const {executeQuery} = require("../../mysql_functions");

function getAllReviews(request, h) {
	const response = new Promise(async (resolve, _) => {
		console.log("Datos en el link:", request.query)
		const {username} = request.query
		console.log("Usuario que solicita:", username);


		// const obtenerReviewsQuery = "SELECT * from review";
		const obtenerReviewsQuery = "select user.nombres as name, user.apellidos as surname, review.comment, review.fecha as date, review.rating from review JOIN user ON review.username = user.username;";
		const obtenerReviewsResult = await executeQuery(obtenerReviewsQuery, []);



		resolve(h.response({
			code: 0,
			message: 'Info retrieved successfully',
			reviews: obtenerReviewsResult
		}).code(200));

	})
	return response.then(data => data);
}

module.exports = {getAllReviews}