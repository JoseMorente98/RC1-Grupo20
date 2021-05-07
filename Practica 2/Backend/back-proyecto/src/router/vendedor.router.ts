import { Router } from "express";
import VendedorController from "../controller/vendedor.controller"
const vendedor = Router();

vendedor.get('/vendedor', VendedorController.getInstance().getAll);
vendedor.get('/vendedor/:id', VendedorController.getInstance().getSingle);
vendedor.post('/vendedor', VendedorController.getInstance().create);
vendedor.put('/vendedor/:id', VendedorController.getInstance().update);
vendedor.delete('/vendedor/:id', VendedorController.getInstance().delete);

export default vendedor;