import passport from "passport";
import { Strategy as jwtStrategy, ExtractJwt } from "passport-jwt";
import UserModel from "../../infrastructure/db/models/userModel.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new jwtStrategy(options, async (jwtPayload, done) => {
    try {
      const user = await UserModel.findById(jwtPayload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false)
      }
    } catch (error) {
      return done(error, false)
    }
  })
);