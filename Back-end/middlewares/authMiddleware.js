const jwt = require("jsonwebtoken");

// Check Token Valid Expired User LoggedIn Append Info Request.User
function authMiddleware(request, response, next) {
  const auth = request.headers.authorization;

  if (!auth) {
    return response.status(401).json({ message: "Unauthorized!" });
  }

  const token = auth.split(" ")[1];
  if (!token) {
    return response.status(401).json({ message: "Unauthorized!" });
  }

  // token => _id & role
  try {
    const userData = jwt.verify(token, "secret_123");
    request.user = userData;
    next();
  } catch (error) {
    response.status(401).json({ message: "Unauthorized!" });
  }
}

module.exports = { authMiddleware };
