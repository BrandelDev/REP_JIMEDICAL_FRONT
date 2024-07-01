const functions = require('firebase-functions');
const path = require('path');

const universal = require(path.resolve(process.cwd(), 'server', 'main')).app();

exports.ssr = functions.https.onRequest(universal);