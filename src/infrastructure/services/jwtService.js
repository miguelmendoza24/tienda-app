const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET; 

const generateToken = (user) => {
  return jwt.sign({ id: user.id, rol: user.rol }, SECRET, { expiresIn: "1h" });
};

module.exports = { generateToken };
