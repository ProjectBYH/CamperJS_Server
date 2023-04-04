const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { user } = require("../../models");

module.exports = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_KEY,
        callbackURL: process.env.GOOGLE_CLIENT_CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const exUser = await user.findOne({
            where: { username: profile.id, loginType: "google" },
          });
          if (exUser) {
            done(null, exUser);
          } else {
            const googleUser = await user.create({
              email: profile._json.email,
              name: profile.displayName,
              username: profile.id,
              loginType: "google",
            });
            done(null, googleUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
