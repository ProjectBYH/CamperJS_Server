const passport = require("passport");
const local = require("./local");
const kakao = require("./kakao");
const google = require("./google");
const { user } = require("../../models");

module.exports = () => {
  passport.serializeUser((users, done) => {
    // console.log("serializeUser", users);
    done(null, users.id);
  });

  passport.deserializeUser(async (id, done) => {
    // console.log("deserializeUser", id);
    user
      .findOne({ where: { id } })
      .then((users) => done(null, users))
      .catch((err) => done(err));
    // try {
    //   const users = await user.findOne({ where: { id } })
    //   done(null, users)
    // } catch (err) {
    //   console.error(err)
    //   done(err)
    // }
  });
  local();
  kakao();
  google();
};
