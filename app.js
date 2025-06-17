require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const usuarioRoutes = require("./src/interfaces/routes/userRoutes")

app.use(express.json());
app.use("/user", usuarioRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
  })
  .catch((error) => {
    console.log('Error al conectar a la base de datos', error.message);
  })
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