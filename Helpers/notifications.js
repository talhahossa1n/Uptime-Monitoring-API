/*
 * Title: Notification Library
 * Description: Important functions to notify users
 * Author: Md. Talha Hossain
 * Date: 15/12/2024
 */

// dependencies
const https = require('https');
const queryString = require('querystring');
const { twilio } = require('./environment');
const { hostname } = require('os');

;
// Module scaffolding
const notifications = {};

// Send SMS to user using twilio API
notifications.sendTwilioSms = (phone, msg, callback) => {
    // input validations
    const userPhone = 
        typeof phone === 'string' &&
        phone.trim().length === 11
            ? phone.trim()
            : false;
    
    const userMsg = 
        typeof msg === 'string' &&
        msg.trim().length > 0 &&
        msg.trim().length <= 1600
            ? msg.trim()
            : false;

    if (userPhone && userMsg) {
        // Configure the request payload
        const payload = {
            From: twilio.fromPhone,
            To: `+88${userPhone}`,
            Body: userMsg,
        };

        // stringify the payload
        const stringifyPayload = queryString.stringify(payload);

        // Configure the request details
        const requestDetails = {
            hostname: 'api.twilio.com',
            method: 'POST',
            path: `/2010-04-01/Accounts/${twilio.accountSid}/Messages.json`,
            auth: `${twilio.accountSid}:${twilio.authToken}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        // Instantiate the request object
        const req = https.request(requestDetails, (res) => {
            // Get the status of the set request
            const status = res.statusCode;
            // Callback successfully if the request went through
            if (status === 200 || status === 201) {
                callback(false);
            } else {
                callback(`Status code return was ${status}`);
            }
        });

        req.on('error', (e) => {
            callback(e);
        });

        req.write(stringifyPayload);
        req.end();
    } else {
        callback('Given parameters were missing or invalid!');
    }
};

// Export the module
module.exports = notifications;
