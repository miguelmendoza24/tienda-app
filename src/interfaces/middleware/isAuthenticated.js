import passport from "./passport.js";

const isAuthenticated = passport.authenticate("jwt", { session: false });

export default isAuthenticated;