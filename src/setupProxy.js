
/**
 * This file proxies our requests to the below endpoints to localhost:5000
 * https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development
 */
const proxy = require('../node_modules/http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy(['/api/', '/auth/google'], { target: 'http://localhost:5000' }));
};