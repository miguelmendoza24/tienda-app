import 'dotenv/config.js'
import express from 'express'
import mongoose from 'mongoose';
import userRoutes from './src/interfaces/routes/userRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/user", userRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected')
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log('Error connecting to MongoDB', error.message);
  }
};
startServer();
/*
{
  "name": "Lucía Torres",
  "email": "lucia.torres@example.com",
  "password": "MiPassword123"
}
  {
  "name": "Carlos Méndez",
  "email": "carlos.admin@example.com",
  "password": "AdminPower456"
}

{
  "email": "lucia.torres@example.com",
  "password": "MiPassword123"
}

{
  "email": "carlos.admin@example.com",
  "password": "AdminPower456"
}

 */