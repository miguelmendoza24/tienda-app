import { registerUser } from '../../use-case/user/registerUser.js';
import { loginUser } from '../../use-case/user/loginUser.js';


const register = async (req, res) => {
  try {
    const user = await registerUser({ ...req.body, role:'customer' });
    res.status(201).json({message:'Usuario creado', user})
  } catch (error) {
    res.status(400).json({error: error.message})

  }
}

const registerAdmin = async (req, res) => {
  try {
    const user = await registerUser({ ...req.body, role: 'admin' });
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
export { register, registerAdmin, login };