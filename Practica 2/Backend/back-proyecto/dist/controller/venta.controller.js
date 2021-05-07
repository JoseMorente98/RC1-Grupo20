"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Venta = require('../model/venta.model');
class VentaController {
    constructor() {
        /**
         * OBTENER TODOS LAS VENTAS
         */
        this.getAll = (req, res) => {
            Venta.find()
                .populate('libro')
                .populate('vendedor')
                .sort({ $natural: -1 })
                .exec((err, data) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data);
                }
            });
        };
        /**
         * OBTENER UNA VENTA
         */
        this.getSingle = (req, res) => {
            let body = {
                id: req.params.id
            };
            Venta.find({ _id: body.id })
                .populate('libro')
                .populate('vendedor')
                .exec((err, data) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json(data[0]);
                }
            });
        };
        /**
         * CREAR VENTA
         */
        this.create = (req, res) => {
            let dataModel = new Venta({
                fecha: req.body.fecha,
                vendedor: req.body.vendedor,
                libro: req.body.libro,
            });
            dataModel.save((err, dataDB) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json({
                        ok: true,
                        status: 200,
                        data: dataDB
                    });
                }
            });
        };
        /**
         * ACTUALIZAR VENTA
         */
        this.update = (req, res) => {
            let body = {
                id: req.params.id,
                fecha: req.body.fecha,
                vendedor: req.body.vendedor,
                libro: req.body.libro,
            };
            Venta.findOneAndUpdate(body.id, body, (err, dataDB) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json({
                        ok: true,
                        status: 200,
                        data: dataDB
                    });
                }
            });
        };
        /**
         * ELIMINAR VENTA
         */
        this.delete = (req, res) => {
            let body = {
                id: req.params.id,
                estado: false
            };
            Venta.findOneAndDelete(body.id, body, (err, dataDB) => {
                if (err) {
                    res.status(400).json({
                        ok: false,
                        status: 400,
                        error: err
                    });
                }
                else {
                    res.json({
                        ok: true,
                        status: 200,
                        data: dataDB
                    });
                }
            });
        };
    }
    static getInstance() {
        return this._instance || (this._instance = new this());
    }
}
exports.default = VentaController;
