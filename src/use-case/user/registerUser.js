import { hashPassword } from '../../infrastructure/services/hashService.js';
import UserModel from '../../infrastructure/db/models/userModel.js';


export const registerUser = async ({ name, email, password, rol }) => {
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new Error('El usuario ya existe');
  }

  const hashedPassword = await hashPassword(password);
  const user = new UserModel({
    name,
    email,
    password: hashedPassword,
    rol,
  });
  await user.save();
  return user;
};