const { verifyToken } = require('../util/JwtUtil');

const authenticateToken = async (req: any, res: any, next: any) => {
  const token_string = req.header('Authorization');

  if (!token_string)
    return res.status(401).json({ message: 'User unauthorized' });
  const token = token_string.substring(7);
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

export { authenticateToken };
