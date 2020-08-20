if (process.argv.length < 5) throw('Please include all parameters while running script: node index.js <api key> <api secret> <filepath for import>');
// Sailthru API key
const apiKey = process.argv[2]
// Sailthru API secret
const secret = process.argv[3]
// Initialize Sailthru NodeJS client
const sailthru = require('sailthru-client').createSailthruClient(apiKey, secret);



// Callback function to log response from Sailthru Job API
const callback = (err, res) => { console.log( err ? err : res )};
// Path to local file to be uploaded to Sailthru
const file = process.argv[4];

const job = 'purchase_import';


// Call API, log response
sailthru.apiPost('job', { job, file }, ['file'], callback);
