import redis from "redis";
let client = redis.createClient(
  process.env.REDIS_PORT,   // 端口号
  process.env.REDIS_IP,    // ip
  ""   // password
);
client.on("ready", function (res) {
  console.log("ready");
});

client.on("end", function (err) {
  console.log("end");
});

client.on("error", function (err) {
  console.log(err);
});

client.on("connect", function () {
  console.log("redis connect success!");
});
