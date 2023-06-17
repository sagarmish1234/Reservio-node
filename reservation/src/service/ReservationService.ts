import Discount from '../model/Discount';
import Hotel from '../model/Hotel';
import Reservation from '../model/Reservation';
import Room from '../model/Room';
import Voucher from '../model/Voucher';

const createReservation = async (payload: any) => {
  const reservation: any = await Reservation.create(payload);
  const hotel = await Hotel.findByPk(payload.hotel);
  const voucher = await Voucher.findByPk(payload.voucher);
  const discount = await Discount.findByPk(payload.discount);
  const rooms = await Room.findAll({
    where: {
      id: payload.rooms,
    },
  });
  await reservation.addRooms(rooms);
  await reservation.setHotel(hotel);
  await reservation.setVoucher(voucher);
  await reservation.setDiscount(discount);
  return { message: 'Reservation completed successfully' };
};

export {createReservation}