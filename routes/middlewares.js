// 라우터 접근 제한 미들웨어 (로그인 상태 검사)

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(200).send("로그인이 필요합니다.");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  // console.log("req.isAuthenticated()", req.isAuthenticated());
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent("이미 로그인을 했습니다.");
    res.redirect(`/?error=${message}`);
    // res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.')
  }
};
