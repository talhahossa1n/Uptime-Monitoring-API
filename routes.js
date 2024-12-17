/*
 * Title: routes
 * Description: application routes
 * Author: Md. Talha Hossain
 * Date: 24/11/2024
 */
// dependencies
const { sampleHandler } = require('./Handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./Handlers/routeHandlers/userHandler');
const { tokenHandler } = require('./Handlers/routeHandlers/tokenHandler');
const { checkHandler } = require('./Handlers/routeHandlers/checkHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
    check: checkHandler,
};

module.exports = routes;
