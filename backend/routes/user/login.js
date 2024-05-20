const { generateSHA256Hash } = require('../../general');
const {executeQuery} = require("../../mysql_functions");

function userLogin(request, h) {
    const response = new Promise(async (resolve, _) => {
        const {username, password} = request.payload
        console.log("Datos obtenidos:", username, password)


        const hashPasswordIngresada = generateSHA256Hash(password);

        const comprobarDatosQuery = "SELECT nombres, apellidos FROM user where username = ? AND hashed_password = ? ";
        const comprobarDatosResult = await executeQuery(comprobarDatosQuery, [username, hashPasswordIngresada]);

        if (comprobarDatosResult.length === 0) {
            resolve(h.response({
                code: 2,
                message: "Usuario/contraseña incorrectos"
            }).code(300));
            return;
        }

        resolve(h.response({
            code: 0,
            message: "Login con exito",
            datos_perfil: {
                nombres: comprobarDatosResult[0]["nombres"],
                apellidos: comprobarDatosResult[0]["apellidos"],
            }
        }).code(200));


    })
    return response.then(data => data);
}

module.exports = {userLogin}
