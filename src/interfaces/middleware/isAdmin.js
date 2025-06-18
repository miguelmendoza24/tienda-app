export function isAdmin(req, res, next) {
  if (req.user && req.user.rol === "admin") {
    return next();
  }
  return res.status(403).json({ error: "Acceso denegado: solo administradores" });
};
