const { hashPassword } = require('../../infrastructure/services/hashService');
const userModel = require('../../infrastructure/db/models/userModel')

async function registerUser({ name, email, password, rol }) {
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error('El usuario ya existe');
  }

  const hashedPassword = await hashPassword(password);
  const user = new userModel({
    name,
    email,
    password: hashedPassword,
    rol,
  });
  await user.save();
  return user;
}

module.exports = registerUser;