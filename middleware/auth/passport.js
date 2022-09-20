const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../models/User');
const passport = require('passport');
const { JWT_TOKEN_SECRET } = process.env;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWT_TOKEN_SECRET;

module.exports = () => {
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      User.findOne({ where: { email: payload.email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        })
        .catch((error) => {
          console.log(error, '1rs');
          return done(error);
        });
    })
  );
};
