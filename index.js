/*
 * Title: Project initial file
 * Description: initial file to start node server and workers
 * Author: Md. Talha Hossain
 * Date: 15/12/2024
 */

// dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');

// app object - module scafolding
const app = {};

// app initialization
app.init = () => {
    // start the server
    server.init();
    // start the workers
    workers.init();
};

app.init();

// export the app (not necessary)
module.exports = app;
