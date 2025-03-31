import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if(!token) return res.status(401).json({ message: "No autorizado "});

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if(err) return res.status(403).json({ message: "Token inválido" });
    req.user = decoded;
    next();
  });
}
