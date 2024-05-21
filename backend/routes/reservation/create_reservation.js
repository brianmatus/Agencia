const {executeQuery} = require("../../mysql_functions");

function createReservation(request, h) {
	const response = new Promise(async (resolve, _) => {

		const {origin, destination, departure_date, return_date, credit_card} = request.payload
		if ([origin, destination, departure_date, return_date, credit_card].some(v => v === undefined || v === "")) {
			resolve(h.response({
				code: 10,
				message: "No todos los datos fueron ingresados"
			}).code(300));
			return;
		}


		const lastFourDigits = credit_card.substring(credit_card.length-4);

		const reservationQuery = 'insert into reservation (origin, destination, departure_date, return_date, cc_last_digits) values (?, ?, ?, ?, ?);'

		const reservationResult = await executeQuery(reservationQuery, [origin, destination, departure_date, return_date, lastFourDigits])

		console.log("Resultado de registrar usuario:", reservationResult);

		resolve(h.response({
			code: 0,
			message: "Reservacion registrada con exito",
		}).code(200));


	})
	return response.then(data => data);
}

module.exports = {createReservation}
