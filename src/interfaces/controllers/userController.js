const registerUser = require("../../use-case/user/registerUser");
const loginUser = require("../../use-case/user/loginUser");


const register = async (req, res) => {
  try {
    const user = await registerUser({ ...req.body, rol:'customer' });
    res.status(201).json({message:'Usuario creado', user})
  } catch (error) {
    res.status(400).json({error: error.message})

  }
}

const registerAdmin = async (req, res) => {
  try {
    const user = await registerUser({ ...req.body, rol: 'admin' });
    res.status(201).json({message: 'administrador creado', user })
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


const login = async (req, res) => {
  try {
    const token = await loginUser(req.body.email, req.body.password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { register, registerAdmin, login };