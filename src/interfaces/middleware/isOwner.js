const isOwner = (req, res, next) => {
  const userIdFromToken = req.user.id;
  const userIdFromParams = req.params.id;

  if (userIdFromToken !== userIdFromParams) {
    return res.status(404).json({
      error: "resource not found",
    });
  }

  next();
};

export default isOwner;

//poyecto academico: se uso para fines de aprendimiento :)
//el uso de query-params vs Bearer token