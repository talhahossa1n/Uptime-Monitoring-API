/*
 * Title: Environments
 * Description: Handle all environment related things.
 * Author: Md. Talha Hossain
 * Date: 26/11/2024
 */
// dependencies

// module scaffolding

const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'secret_encryption_key_staging',
    maxChecks: 5,
    twilio: {
        // provided by twilio account
        fromPhone: '',
        accountSid: '',
        authToken: '',
    },
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'secret_encryption_key_production',
    maxChecks: 5,
    twilio: {
        // provided by twilio account
        fromPhone: '',
        accountSid: '',
        authToken: '',
    },
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
