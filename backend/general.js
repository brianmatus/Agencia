const fs = require('fs');
const crypto = require('crypto');


function generateSHA256Hash(text) {
    return crypto.createHash('sha256').update(text).digest('hex');
}



module.exports = {generateSHA256Hash}