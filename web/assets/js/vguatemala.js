document.getElementById("btnCalcular").addEventListener("click", function() {
    var paisSalida = document.getElementById("paisSalida").value;
    var fechaSalida = document.getElementById("fechaSalida").value;
    var fechaRegreso = document.getElementById("fechaRegreso").value;
    var numPersonas = document.getElementById("numPersonas").value;

    // Validar que los campos no estén vacíos
    if (!paisSalida || !fechaSalida || !fechaRegreso || !numPersonas) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    var precioBase = 100; 
    var precioTotal = precioBase * numPersonas; 

    alert("El precio total es: $" + precioTotal);
});
