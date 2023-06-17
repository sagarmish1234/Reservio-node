import  Discount from '../model/Discount';

const createDiscount = async (payload: any) => {
  const discount = await Discount.create(payload);
  return { message: 'Discount created successfully' };
};

export { createDiscount };
