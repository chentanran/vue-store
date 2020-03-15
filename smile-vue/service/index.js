const Koa = require('koa')
const app = new Koa()
const { connect, initSchemas } = require('./database/init')
const mongoose = require('mongoose')
const Router = require('koa-router')
let user = require('./appApi/user')

const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

const cors = require('koa2-cors')
app.use(cors())

;(async() => {
  await connect()
  initSchemas()
  const User = mongoose.model('User')
  let oneUser = new User({userName:'jspang', password:'12345'})
  oneUser.save().then(() => {
    console.log('插入成功')
  }).catch(() => {})

  let users = await User.findOne({}).exec()
  console.log(users)
})()

// router
let router = new Router()
router.use('/user', user.routes())
let goods = require('./appApi/goods')
router.use('/goods', goods.routes())
// 加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

app.use(async(ctx)=> {
  ctx.body = '<h1>hello koa2</h1>'
})

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})