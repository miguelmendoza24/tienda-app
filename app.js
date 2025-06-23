import 'dotenv/config.js'
import express from 'express'
import mongoose from 'mongoose';
import userRoutes from './src/interfaces/routes/userRoutes.js'
import productRoutes from './src/interfaces/routes/productRoutes.js'
import passport from 'passport';
import './src/interfaces/middleware/passport.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(passport.initialize());

app.use(express.json());
app.use("/product", productRoutes)
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