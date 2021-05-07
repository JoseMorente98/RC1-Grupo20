import { Request, Response } from 'express';
const Vendedor = require('../model/vendedor.model')

export default class VendedorController {
    private static _instance: VendedorController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || ( this._instance = new this() );
    }

    /**
     * OBTENER TODOS LOS dataModels
     */
    getAll = (req: Request, res: Response) =>  {
        Vendedor.find().sort({$natural:-1})
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
     * OBTENER UN CASO
     */
    getSingle = (req: Request, res: Response) => {
        let body = {
            id : req.params.id
        }
        
        Vendedor.find({_id: body.id})
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
     * CREAR CASO
     */
    create = (req: Request, res: Response) => {
        let dataModel = new Vendedor({
            DPI: req.body.DPI,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
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
     * ACTUALIZAR dataModel
     */
    update = (req: Request, res: Response) => {
        let body = {
            id: req.params.id,
            DPI: req.body.DPI,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
        }

        Vendedor.findOneAndUpdate(body.id, body, (err:any, dataDB:any) => {
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
     * ELIMINAR dataModel
     */
    delete = (req: Request, res: Response) => {
        let body = {
            id: req.params.id,
            estado: false
        }

        Vendedor.findOneAndDelete(body.id, body, (err:any, dataDB:any) => {
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