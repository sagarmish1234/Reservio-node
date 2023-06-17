"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservation = void 0;
const Discount_1 = __importDefault(require("../model/Discount"));
const Hotel_1 = __importDefault(require("../model/Hotel"));
const Reservation_1 = __importDefault(require("../model/Reservation"));
const Room_1 = __importDefault(require("../model/Room"));
const Voucher_1 = __importDefault(require("../model/Voucher"));
const createReservation = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const reservation = yield Reservation_1.default.create(payload);
    const hotel = yield Hotel_1.default.findByPk(payload.hotel);
    const voucher = yield Voucher_1.default.findByPk(payload.voucher);
    const discount = yield Discount_1.default.findByPk(payload.discount);
    const rooms = yield Room_1.default.findAll({
        where: {
            id: payload.rooms,
        },
    });
    yield reservation.addRooms(rooms);
    yield reservation.setHotel(hotel);
    yield reservation.setVoucher(voucher);
    yield reservation.setDiscount(discount);
    return { message: 'Reservation completed successfully' };
});
exports.createReservation = createReservation;
