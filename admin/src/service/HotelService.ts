import Hotel from '../model/Hotel';

const createHotel = async (payload: any) => {
  const hotel = await Hotel.create(payload);
  return { message: 'Hotel registered successfully' };
};

export { createHotel };
