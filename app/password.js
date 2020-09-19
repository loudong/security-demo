console.log('password')
const crypto = require('crypto')
const hash = (type, str) => crypto.createHash(type).update(str).digest('hex')
const md5 = str => hash('md5', str)
const sha1 = str => hash('sha1', str)
const TEMP = 'ASDASDasdd@#$%^'
const saltPassword = (salt, password) => md5(salt+TEMP+password)

module.exports = saltPassword
