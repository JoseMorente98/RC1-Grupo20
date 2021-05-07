"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendedor_controller_1 = __importDefault(require("../controller/vendedor.controller"));
const vendedor = express_1.Router();
vendedor.get('/vendedor', vendedor_controller_1.default.getInstance().getAll);
vendedor.get('/vendedor/:id', vendedor_controller_1.default.getInstance().getSingle);
vendedor.post('/vendedor', vendedor_controller_1.default.getInstance().create);
vendedor.put('/vendedor/:id', vendedor_controller_1.default.getInstance().update);
vendedor.delete('/vendedor/:id', vendedor_controller_1.default.getInstance().delete);
exports.default = vendedor;
