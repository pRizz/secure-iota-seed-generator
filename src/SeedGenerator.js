const crypto = require('crypto')

function generateSeed() {
    // TODO: optimize
    return [...Array(81)].map(() => (function getRandomChar() { return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9'[crypto.randomBytes(1)[0]] || getRandomChar() })()).join('')
}

module.exports = {
    generateSeed
}