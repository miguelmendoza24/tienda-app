import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET; 

export const generateToken = (user) => {
  return jwt.sign({ id: user.id, rol: user.rol }, SECRET, { expiresIn: "1h" });
};