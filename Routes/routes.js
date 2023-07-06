import { Router } from 'express';
import { getProductos, postProductos, putProductos, deleteProductos } from '../Controllers/producto.js';
import { getClientes, postClientes, putClientes, deleteClientes } from '../Controllers/cliente.js';
import { deleteAdministrador, getAdministrador, postAdministrador, putAdministrador } from '../Controllers/administrados.js';

const router = Router();

//Definir Rutas
router.get("/",(req, res)=> {
  res.send("GET Pagina Principal Express")
});

router.get("/productos", getProductos);
router.post("/productos",postProductos);
router.put("/productos/:id_producto",putProductos);
router.delete("/productos/:id_producto", deleteProductos);

router.get("/clientes", getClientes);
router.post("/clientes",postClientes);
router.put("/clientes/:id_cliente",putClientes);
router.delete("/clientes/:id_cliente", deleteClientes);

router.get("/administrador", getAdministrador);
router.post("/administrador",postAdministrador);
router.put("/administrador/:id_administrador",putAdministrador);
router.delete("/administrador/:id_administrador", deleteAdministrador);

export default router;

