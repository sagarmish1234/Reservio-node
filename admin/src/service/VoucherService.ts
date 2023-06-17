import Voucher from '../model/Voucher';

const createVoucher = async (payload: any) => {
  const voucher = await Voucher.create(payload);
  return { message: 'Voucher created successfully' };
};

export {createVoucher}