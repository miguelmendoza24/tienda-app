import User from '../../domain/entities/user.js';
import { hashPassword } from '../../infrastructure/services/hashService.js';
import UserModel from '../../infrastructure/db/models/userModel.js';


export const registerUser = async ({ name, email, password, role }) => {
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new Error('El usuario ya existe');
  }

  const hashedPassword = await hashPassword(password);
  const userEntity = new User({
    id:undefined,
    name,
    email,
    password: hashedPassword,
    role,
  });
  const user = new UserModel(userEntity)
  await user.save();
  
  return user;
};