import Hotel from '../model/Hotel';
import Room from '../model/Room';

const createRoom = async (payload: any) => {
  const hotel = await Hotel.findByPk(payload.hotel);
  if (hotel === null) throw new Error('No hotel found');
  const room: any = await Room.create(payload);
  room.setHotel(hotel);
  return { message: 'Room saved successfully' };
};

export { createRoom };
