const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const user = require("./controller/user");
// const log = require("./controller/log");
// const auth = require("./controller/auth");
const authUtils = require("./utils/auth");

// function initDB() {
//   mongoose.connect("mongodb://localhost:27017/storybook");

//   user.User.findOne({ username: "admin" }, function (error, result) {
//     if (error) {
//       console.log("数据库连接失败......");
//     } else if (!result) {
//       const admin = new user.User({
//         username: "admin",
//         password: "123456",
//         nickname: "lich",
//         email: "lich.chen@elitesland.com",
//         emabled: true
//       });
//       admin.save((err, ret) => {
//         if (err) {
//           console.log("初始化admin失败......");
//         } else {
//           console.log("admin初始化成功......");
//         }
//       });
//     } else {
//       console.log(
//         `数据库连接成功......\r\nadmin账户:\r\n(admin/${result.password})\r\n已经初始化`
//       );
//     }

//     /* ... */
//   });
// }

// // 加载静态文件 打包好的静态文件放在dist下

// // 设置服务器代理，解决跨域问题
// // target：目标地址
// // app.use('/api', proxy({target: 'http://website.xxx.com', changeOrigin: true}));
// initDB();
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() === "options") res.send(200);
  //让options尝试请求快速结束
  else next();
});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(async function (req, res, next) {
  
});
// app.use("/api/user", user.router);
// app.use("/api/log", log.router);
// app.use("/api/auth", auth.router);
//监听端口
app.listen(8081, (err) => {
  if (err) {
    console.log(err);
    return null;
  }

  return console.log("starting");
});
