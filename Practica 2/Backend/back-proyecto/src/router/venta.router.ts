import { Router } from "express";
import VentaController from "../controller/venta.controller"
const venta = Router();

venta.get('/venta', VentaController.getInstance().getAll);
venta.get('/venta/:id', VentaController.getInstance().getSingle);
venta.post('/venta', VentaController.getInstance().create);
venta.put('/venta/:id', VentaController.getInstance().update);
venta.delete('/venta/:id', VentaController.getInstance().delete);

export default venta;