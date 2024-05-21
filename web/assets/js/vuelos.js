$(document).ready(loadCountries);



function goToCountryPage(id) {
	console.log("Visitando pais con id:", id);
	window.location.href = '/ver_vuelo?id=' + id;
}


function loadCountries() {
	fetch(`${API_BASE_URL}/country/get_all`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	}).then(response => {
		response.json().then( data => {
			console.log("Paises obtenidos:");
			// console.log(data);

			for (const country of data.countries) {
				console.log(country);

				const newCountry = `
				<div class="card-category category-expreso">
					<a href="#" onclick="goToCountryPage(${country.id});return false;">
						<div class="container-img">
							<img src="assets/img/${country.image_src}" alt="Costa Rica">
							<p>${country.nombre}</p>
						</div>
					</a>
				</div>
				`
				$("#countriesContainer").append(newCountry);
			}
		});
	})
}