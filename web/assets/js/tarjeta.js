document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var cardNumber = document.getElementById("card-number").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;
    var cardholderName = document.getElementById("cardholder-name").value;
    var email = document.getElementById("email").value;
    var billingAddress = document.getElementById("billing-address").value;
    var city = document.getElementById("city").value;
    var zipCode = document.getElementById("zip-code").value;
    var country = document.getElementById("country").value;


    console.log("Número de Tarjeta:", cardNumber);
    console.log("Fecha de Vencimiento:", expiryDate);
    console.log("CVV:", cvv);
    console.log("Nombre del Titular:", cardholderName);
    console.log("Correo Electrónico:", email);
    console.log("Dirección de Facturación:", billingAddress);
    console.log("Ciudad:", city);
    console.log("Código Postal:", zipCode);
    console.log("País:", country);

});
