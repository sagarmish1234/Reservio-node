"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Discount = db_1.default.define('Discount', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    periodFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    periodTo: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    percentage: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            max: 25,
        },
    },
});
exports.default = Discount;
