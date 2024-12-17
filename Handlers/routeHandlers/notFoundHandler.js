/*
 * Title: Not Found Handler
 * Description: 404 not found Handler
 * Author: Md. Talha Hossain
 * Date: 24/11/2024
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested url was not found!:(',
    });
};

module.exports = handler;
