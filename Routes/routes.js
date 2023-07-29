import { Router } from 'express';
import { getProductos,getProducto, postProductos, putProductos, deleteProductos } from '../Controllers/producto.js';
import { getClientes, getCliente,postClientes, putClientes, deleteClientes } from '../Controllers/cliente.js';
import { deleteAdministrador, getAdministradores, getAdministrador, loginAdministrador, postAdministrador, putAdministrador } from '../Controllers/administrados.js';
import { getCarro, postCarro, enviar} from '../Controllers/carro.js';
import { verificarToken } from '../Token/token.js';

const router = Router();

//Definir Rutas
router.get("/",(req, res)=> {
  res.send("GET Pagina Principal Express")
});

router.get("/productos", getProductos);
router.get("/productos/:id_producto", getProducto);
router.post("/productos", postProductos);
router.put("/productos/:id_producto",putProductos);
router.delete("/productos/:id_producto",deleteProductos);

router.get("/clientes", getClientes);
router.get("/clientes/:id_cliente", getCliente);
router.post("/clientes",postClientes);
router.put("/clientes/:id_cliente",putClientes);
router.delete("/clientes/:id_cliente",deleteClientes);

router.post("/login", loginAdministrador);
router.get("/administrador/:id_administrador",getAdministrador);
router.get("/administradores",getAdministradores);
router.post("/administrador",postAdministrador);
router.put("/administrador/:id_administrador",putAdministrador);
router.delete("/administrador/:id_administrador",deleteAdministrador);

router.get("/carro", getCarro);
router.post("/carro/:id_cliente", postCarro);
router.put("/carro", enviar);

export default router;

