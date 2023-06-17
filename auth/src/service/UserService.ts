import User from '../model/User';
import Roles from '../utils/Roles';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/JwtUtil';

const findUserIfExits = async (email: string) => {
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  console.log(user);
  return user !== null;
};

const createUser = async (userPayload: any) => {
  const salt = await bcrypt.genSalt(10);
  if (await findUserIfExits(userPayload.email))
    throw new Error('User already exits');
  const user = await User.create({
    email: userPayload.email,
    password: await bcrypt.hash(userPayload.password, salt),
    firstName: userPayload.firstName,
    lastName: userPayload.lastName,
    address: userPayload.address,
    phone: userPayload.phone,
    role: Roles.USER.valueOf(),
  });
  return { message: 'User registered successfully' };
};

const signInUser = async (email: string, password: string) => {
  const user: any = await User.findOne({
    where: {
      email: email,
    },
  });
  if (
    user === null ||
    !(await bcrypt.compare(password, user.password))
  )
    throw new Error('Invalid username or password');
  const token = generateToken(user);
  return token;
};

export { createUser, signInUser };
