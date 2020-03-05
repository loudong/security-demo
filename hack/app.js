const koa = require('koa');
const chalk = require('chalk')
const log = contents => {
    console.log(chalk.red(contents))
}

// 模拟攻击者网站
const app = new koa();
const static = require('koa-static')
app.use(static(__dirname + '/views'))

app.use(async (ctx, next) => {
    log('attack...:' + ctx.url)
    await next()
})


module.exports = app