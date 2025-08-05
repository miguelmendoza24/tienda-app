import UserModel from '../../infrastructure/db/models/userModel.js';
import { comparePasswords } from '../../infrastructure/services/hashService.js';
import { generateToken } from '../../infrastructure/services/jwtService.js';

export const loginUser = async (email, password) => {
  const user = await UserModel.findOne({ email })
  if (!user) throw new Error('Usuario no encontrado');

  const isValid = await comparePasswords(password, user.password);
  if (!isValid) throw new Error('contraseña incorrecta')
  
  return generateToken(user)
};