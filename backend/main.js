const {userLogin} = require('./routes/user/login');
const {userRegister} = require('./routes/user/register');

const {getAllReviews} = require('./routes/review/get_all_reviews');
const {createReview} = require('./routes/review/create_review');

const {getAllCountries} = require('./routes/country/get_all_countries');
const {getInfo} = require("./routes/country/get_info");

const {createReservation} = require("./routes/reservation/create_reservation");


const Hapi = require('@hapi/hapi');


const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: '0.0.0.0',
        routes: {
            cors: true
        }
    });

    server.route([
        {
            method: 'POST',
            path: '/user/login',
            handler: userLogin
        },
        {
            method: 'POST',
            path: '/user/register',
            handler: userRegister
        },
        {
            method: 'GET',
            path: '/review/get_all_reviews',
            handler: getAllReviews
        },
        {
            method: 'POST',
            path: '/review/create_review',
            handler: createReview
        },
        {
            method: 'GET',
            path: '/country/get_all',
            handler: getAllCountries
        },
        {
            method: 'GET',
            path: '/country/get_info',
            handler: getInfo
        },
        {
            method: 'POST',
            path: '/reservation/create_reservation',
            handler: createReservation
        }
    ])
    await server.start();
    console.log("Server running at %s", server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});


init().then(() => {});