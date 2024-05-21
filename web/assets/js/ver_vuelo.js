
$(document).ready(function () {
    loadCountryData();

    document.getElementById("btnCalcular").addEventListener("click", function() {
        var paisSalida = document.getElementById("paisSalida").value;
        var fechaSalida = document.getElementById("fechaSalida").value;
        var fechaRegreso = document.getElementById("fechaRegreso").value;
        var numPersonas = document.getElementById("numPersonas").value;

        if (!paisSalida || !fechaSalida || !fechaRegreso || !numPersonas) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        var precioBase = 300;
        var precioTotal = precioBase * numPersonas;

        alert("El precio total es: $" + precioTotal);
    });
})



function loadCountryData() {
    const currentPageParams = new URLSearchParams(window.location.search);
    currentCountryID = currentPageParams.get("id");
    console.log("ID actual:", currentCountryID);

    const data = {
        id: currentCountryID
    }

    const stringParametros = Object.keys(data).map(key => {
        return encodeURI(key) + "=" + encodeURIComponent(data[key])
    }).join("&")

    const reviewURL = `${API_BASE_URL}/country/get_info?${stringParametros}`
    console.log(reviewURL);

    fetch(reviewURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        response.json().then( data => {
            console.log("Info obtenida:");
            console.log(data);

            $("#countryName").text(data.data.nombre);

            const elements = data.data.description.split("\n").map(v => {
                return `<p class="descripcion">${v}</p>`
            })
            $("#countryInfo").append(elements);


            $("#countryImage").attr("src", `assets/img/${data.data.image_src}`)

            loadCountryList(data.data.id);

        });
    })

}



function loadCountryList(id) {
    fetch(`${API_BASE_URL}/country/get_all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        response.json().then( data => {
            console.log("data obtenida de paises:", data)
            for (const country of data.countries) {
                console.log(country);
                if (country.id === id) {
                    continue;
                }

                $("#paisSalida").append(`<option value='${country.id}'>${country.nombre}</option>`);
            }
        });
    })
}

function reservarVuelo() {

    const currentPageParams = new URLSearchParams(window.location.search);
    currentCountryID = currentPageParams.get("id");
    console.log("ID actual:", currentCountryID);

    const origin = currentCountryID;
    const destination = $("#paisSalida").val();
    const departure_date = $("#fechaSalida").val();
    const return_date = $("#fechaRegreso").val();
    const credit_card = $("#numeracionTarjeta").val();


    const data = {
        origin: origin,
        destination: destination,
        departure_date: departure_date,
        return_date: return_date,
        credit_card: credit_card,
    }

    fetch(API_BASE_URL + "/reservation/create_reservation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            response.json().then( data => {
                alert("Error al mandar reservacion: " + data.message);
                console.log(data);
            })


        } else {
            alert("Reservacion registrado con exito");
            response.json().then( data => {
                console.log(response);
                window.location.href = '/principal'
            })
        }
    })


}