"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.generateToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(JSON.stringify(payload), process.env.SECRET_TEXT);
    return token;
};
exports.verifyToken = (token) => {
    if (!jsonwebtoken_1.default.verify(token, process.env.SECRET_TEXT))
        throw new Error('User not Authenticated');
    return jsonwebtoken_1.default.decode(token, {
        complete: true,
    });
};
