const express = require("express");
const app = express();
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();
dbConfig = require("./config/database.js");
const conn = dbConfig.init();
dbConfig.connect(conn);

const campingRouter = require("./routes/campings");
// const imageUrlRouter = require('./routes/campingImageUrl')
const passportConfig = require("./routes/passport");
const authRouter = require("./routes/auth");

passportConfig(); //패스포트 설정

app.use(express.json());
//json 형태 데이터 해석
app.use(express.urlencoded({ extended: false }));
//x-www-form-urlencoded 형태 데이터 해석
//참고자료 https://kirkim.github.io/javascript/2021/10/16/body_parser.html

app.use(
  cors({
    origin: ["https://localhost:3000", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
  })
);

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false, //초기화 되지 않은 상태로 스토어에 저장되는 세션
    resave: false, //세션을 항상 저장할 것 인가?
    secret: process.env.COOKIE_SECRET, //세션 암호화
    cookie: {
      httpOnly: true, //브라우저에서는 쿠키에 접근할 수 없도록 제한 (XSS 공격 차단)
      secure: false, //HTTPS가 아닌 통신에서는 쿠키를 전송하지 않음
      // sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/camping", campingRouter);
// app.use('/imageurl', imageUrlRouter)
app.use("/auth", authRouter);
app.get("/", function (req, res) {
  res.send("안녕 세계!");
});

const HTTPS_PORT = process.env.DATABASE_PORT || 8080;

let server;
//인증키 파일이 존재할 경우 https로 실행
//인증키 파일이 존재하지 않을 경우 http로 실행
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log("https server runnning"));
} else {
  server = app.listen(HTTPS_PORT, () => console.log("http server runnning"));
}
module.exports = server;

// const PORT = process.env.DATABASE_PORT || 4002;
// app.listen(PORT, () => console.log(PORT + '포트로 서버 시작'));
