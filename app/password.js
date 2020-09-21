// crypto node的核心模块，主要作用是加密解密
const crypto = require('crypto')
// 创建一个hash类，用来生成数据的哈希值
// hash类是一个可读写的stream， 使用hash.update（）将计算数据以流的方式写入，流输入结束
// 使用digest（）方法计算数据的hash值
const hash = (type, str) => crypto.createHash(type).update(str).digest('hex')
const md5 = str => hash('md5', str)
const sha1 = str => hash('sha1', str)
const TEMP = 'ASDASDasdd@#$%^'
const saltPassword = (salt, password) => md5(salt+TEMP+password)

module.exports = saltPassword
