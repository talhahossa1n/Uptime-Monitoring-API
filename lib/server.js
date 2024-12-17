/*
 * Title: Server library
 * Description: Server related files
 * Author: Md. Talha Hossain
 * Date: 15/12/2024
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('../Helpers/handleReqRes');
const environment = require('../Helpers/environment');

// server object - module scafolding
const server = {};

// configuration
/* moved to environment.js */

//  create server
server.createServer = () => {
    const createServerVariable = http.createServer(server.handleReqRes);
    createServerVariable.listen(environment.port, () => {
        console.log(`Listening to port ${environment.port}`);
    });
};

// handle Request Response
server.handleReqRes = handleReqRes;
// start the server
server.init = () => {
    server.createServer();
};

// export
module.exports = server;
