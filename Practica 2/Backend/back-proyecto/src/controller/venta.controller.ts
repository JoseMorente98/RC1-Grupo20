import { Request, Response } from 'express';
const Venta = require('../model/venta.model')

export default class VentaController {
    private static _instance: VentaController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    /**
     * OBTENER TODOS LAS VENTAS
     */
    getAll = (req: Request, res: Response) =>  {
        Venta.find()
        .populate('libro')
        .populate('vendedor')
        .sort({$natural:-1})
        .exec((err:any, data:any) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json(data);
            } 
        })
    }

    /**
     * OBTENER UNA VENTA
     */
    getSingle = (req: Request, res: Response) => {
        let body = {
            id : req.params.id
        }
        
        Venta.find({_id: body.id})
        .populate('libro')
        .populate('vendedor')
        .exec((err:any, data:any) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json(data[0]);
            } 
        })
    }

    /**
     * CREAR VENTA
     */
    create = (req: Request, res: Response) => {
        let dataModel = new Venta({
            fecha: req.body.fecha,
            vendedor: req.body.vendedor,
            libro: req.body.libro,
        });

        dataModel.save((err:any, dataDB:any) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json({
                    ok: true,
                    status: 200,
                    data: dataDB
                });
            }            
        });  
    }

    /**
     * ACTUALIZAR VENTA
     */
    update = (req: Request, res: Response) => {
        let body = {
            id: req.params.id,
            fecha: req.body.fecha,
            vendedor: req.body.vendedor,
            libro: req.body.libro,
        }

        Venta.findOneAndUpdate(body.id, body, (err:any, dataDB:any) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json({
                    ok: true,
                    status: 200,
                    data: dataDB
                });
            }  
        })
    }

    /**
     * ELIMINAR VENTA
     */
    delete = (req: Request, res: Response) => {
        let body = {
            id: req.params.id,
            estado: false
        }

        Venta.findOneAndDelete(body.id, body, (err:any, dataDB:any) => {
            if(err) {
                res.status(400).json({
                    ok: false,
                    status: 400,
                    error: err
                });
            } else {
                res.json({
                    ok: true,
                    status: 200,
                    data: dataDB
                });
            }  
        })
    }
}