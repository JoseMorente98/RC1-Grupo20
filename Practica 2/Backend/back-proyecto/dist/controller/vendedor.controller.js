"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vendedor = require('../model/vendedor.model');
class VendedorController {
    constructor() {
        /**
         * OBTENER TODOS LOS dataModels
         */
        this.getAll = (req, res) => {
            Vendedor.find().sort({ $natural: -1 })
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
         * OBTENER UN CASO
         */
        this.getSingle = (req, res) => {
            let body = {
                id: req.params.id
            };
            Vendedor.find({ _id: body.id })
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
         * CREAR CASO
         */
        this.create = (req, res) => {
            let dataModel = new Vendedor({
                DPI: req.body.DPI,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
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
         * ACTUALIZAR dataModel
         */
        this.update = (req, res) => {
            let body = {
                id: req.params.id,
                DPI: req.body.DPI,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
            };
            Vendedor.findOneAndUpdate(body.id, body, (err, dataDB) => {
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
         * ELIMINAR dataModel
         */
        this.delete = (req, res) => {
            let body = {
                id: req.params.id,
                estado: false
            };
            Vendedor.findOneAndDelete(body.id, body, (err, dataDB) => {
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
exports.default = VendedorController;
