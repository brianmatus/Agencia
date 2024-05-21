document.addEventListener("DOMContentLoaded", function() {
    // Obtener información del vuelo desde la página anterior (vuelos)
    const params = new URLSearchParams(window.location.search);
    const numPersonas = parseInt(params.get("numPersonas"));
    const departureDate = params.get("departureDate");
    const returnDate = params.get("returnDate");
    const totalPrice = params.get("totalPrice");

    // Rellenar fechas y precio del vuelo
    document.getElementById("departureDate").textContent = departureDate;
    document.getElementById("returnDate").textContent = returnDate;
    document.getElementById("totalPrice").textContent = totalPrice;

    // Generar campos de información para cada pasajero
    const passengerInfoContainer = document.getElementById("passengerInfo");

    for (let i = 0; i < numPersonas; i++) {
        const passengerDiv = document.createElement("div");
        passengerDiv.classList.add("passenger");

        const nameLabel = document.createElement("label");
        nameLabel.textContent = `Nombre completo de la persona ${i + 1}: `;
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.name = `nombrePersona${i + 1}`;
        nameInput.required = true;

        const passportLabel = document.createElement("label");
        passportLabel.textContent = `Número de pasaporte de la persona ${i + 1}: `;
        const passportInput = document.createElement("input");
        passportInput.type = "text";
        passportInput.name = `pasaportePersona${i + 1}`;
        passportInput.required = true;

        passengerDiv.appendChild(nameLabel);
        passengerDiv.appendChild(nameInput);
        passengerDiv.appendChild(passportLabel);
        passengerDiv.appendChild(passportInput);

        passengerInfoContainer.appendChild(passengerDiv);
    }
});

function selectPayment(method) {
    alert(`Forma de pago seleccionada: ${method}`);
}
