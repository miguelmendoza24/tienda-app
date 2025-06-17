const userModel = require('../../infrastructure/db/models/userModel');
const{comparePasswords} = require('../../infrastructure/services/hashService')

const { generateToken } = require('../../infrastructure/services/jwtService');

async function loginUser(email, password) {
  const user = await userModel.findOne({ email })
  if (!user) throw new Error('Usuario no encontrado');

  const isValid = await comparePasswords(password, user.password);
  if (!isValid) throw new Error('contraseña incorrecta')
  
  return generateToken(user)
}


module.exports = loginUser;