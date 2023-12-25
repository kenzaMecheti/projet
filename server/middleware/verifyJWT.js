const jwt = require("jsonwebtoken");
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(404).json({ message: "unothized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: err });
    req.username = decoded.userInfo.username;

    next();
  });
};
module.exports = verifyJWT;
