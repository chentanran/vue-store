const mongoose = require('mongoose')
const db = 'mongodb://localhost/simle-db'

mongoose.Promise = global.Promise

const glob = require('glob')
const { resolve } = require('path')

exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
}



exports.connect = () => {
  // 链接数据库
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  let maxConnectTimes = 0

  return new Promise((resolve, reject) => {
    // 增加数据库链接的事件监听
    mongoose.connection.on('disconnected', () => {
      // 进行重连
      if (maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject()
        throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
      }

    })
    // 数据库出现错误
    mongoose.connection.on('error', err => {
      console.log(err)
      if (maxConnectTimes < 3) {
        maxConnectTimes++
        mongoose.connect(db)
      } else {
        reject()
        throw new Error('数据库出现问题，程序无法搞定，请人为修理......')
      }
    })
    // 链接打不开的时候
    mongoose.connection.once('open', () => {
      console.log('mongoDB Connected successfully')
      resolve()
    })
  })
}