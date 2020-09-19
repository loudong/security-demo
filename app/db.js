/**
 * mysql模块的操作都是异步操作，
 * 每次操作的结果都是在回调函数中执行，使用的时候一般封装起来，提供一个接口，
 * 使用的时候用async/await，就可以用同步的写法去操作数据库。
 */

const mysql = require('mysql')
// 创建连接池
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'mysql'
})

// 连接池中进行会话操作
module.exports = function (sql, values) {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    // 结束会话
                    connection.release()
                })
            }
        })
    })
}
