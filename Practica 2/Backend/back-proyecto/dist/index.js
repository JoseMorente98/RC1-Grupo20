"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const bodyParser = require("body-parser");
/**
 * ROUTES
 */
const libros_router_1 = __importDefault(require("./router/libros.router"));
const venta_router_1 = __importDefault(require("./router/venta.router"));
const vendedor_router_1 = __importDefault(require("./router/vendedor.router"));
/**
 * CONFIGURACIÓN DE PUERTO LOCAL Y PRODUCCIÓN
 */
const PORT = parseInt(process.env.PORT, 10) || 3000;
const server = server_1.default.init(PORT);
const api = "/api/";
/**
 * HEADEARS & CORS
 */
server.app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if (req.methods == "OPTIONS") {
        res.sendStatus(200);
    }
    else {
        next();
    }
});
/**
 * BODY PARSER
 */
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({ extended: false }));
/**
 * API'S
 */
server.app.use(api, libros_router_1.default);
server.app.use(api, vendedor_router_1.default);
server.app.use(api, venta_router_1.default);
server.startSocket(() => {
    console.log("Servidor corriendo en el puerto 3000 :D");
});
