const {userLogin} = require('./routes/user/login');
const {userRegister} = require('./routes/user/register');
const {getAllReviews} = require('./routes/review/get_all_reviews');

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