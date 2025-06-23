export const isClient = (req, res, next) => {
  if (req.user?.rol === "customer") {
    return next();
  }
  return res.status(403).json({ error: "Acceso denegado: solo clientes" });
};