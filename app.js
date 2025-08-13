import 'dotenv/config.js'
import express from 'express'
import userRoutes from './src/interfaces/routes/userRoutes.js'
import productRoutes from './src/interfaces/routes/productRoutes.js'
import purchaseRoutes from './src/interfaces/routes/purchaseRoutes.js'
import passport from 'passport';
import './src/interfaces/middleware/passport.js'
import { connectDB } from './src/infrastructure/db/mongo.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)



app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(passport.initialize());


app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use('/purchase', purchaseRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.get("*",  (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
};
startServer();