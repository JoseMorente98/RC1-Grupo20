"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venta_controller_1 = __importDefault(require("../controller/venta.controller"));
const venta = express_1.Router();
venta.get('/venta', venta_controller_1.default.getInstance().getAll);
venta.get('/venta/:id', venta_controller_1.default.getInstance().getSingle);
venta.post('/venta', venta_controller_1.default.getInstance().create);
venta.put('/venta/:id', venta_controller_1.default.getInstance().update);
venta.delete('/venta/:id', venta_controller_1.default.getInstance().delete);
exports.default = venta;
