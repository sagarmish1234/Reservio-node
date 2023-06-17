import  jwt from 'jsonwebtoken';

exports.generateToken = (payload:any) => {
  const token = jwt.sign(JSON.stringify(payload), process.env.SECRET_TEXT!);
  return token;
};

exports.verifyToken = (token:any) => {
  if (!jwt.verify(token, process.env.SECRET_TEXT!))
    throw new Error('User not Authenticated');

  return jwt.decode(token, {
    complete: true,
  });
};
