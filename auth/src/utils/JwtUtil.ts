import jwt from 'jsonwebtoken';

const generateToken = (payload: any) => {
  const token = jwt.sign(
    JSON.stringify(payload),
    process.env.SECRET_TEXT!
  );
  return token;
};

const verifyToken = (token: any) => {
  if (!jwt.verify(token, process.env.SECRET_TEXT!))
    throw new Error('User not Authenticated');

  return jwt.decode(token, {
    complete: true,
  });
};

export { generateToken, verifyToken };
