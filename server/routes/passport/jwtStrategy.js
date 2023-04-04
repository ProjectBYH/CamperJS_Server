// require("dotent").config();
// const passport = require("passport");
// const JWTStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const { user } = require("../../models");

// module.exports = () => {
//   passport.use(
//     new JWTStrategy(
//       {
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         secretOrKey: process.env.JWT_SECRET,
//       },
//       async (jwt_payload, done) => {
//         try {
//           const users = await user.findOne({ where: { id: jwt_payload.id } });
//           if (!users) {
//             done(null, false);
//           } else {
//             done(null, users);
//           }
//         } catch (err) {
//           done(err);
//         }
//       }
//     )
//   );
// };
