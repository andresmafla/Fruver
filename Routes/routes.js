import { Router } from 'express';
import { getProductos, postProductos, putProductos, deleteProductos } from '../Controllers/producto.js';
import { getClientes, postClientes, putClientes, deleteClientes } from '../Controllers/cliente.js';
import { deleteAdministrador, getAdministrador, loginAdministrador, postAdministrador, putAdministrador } from '../Controllers/administrados.js';
import { getCarro, postCarro, enviar} from '../Controllers/carro.js';
import { verificarToken } from '../Token/token.js';

const router = Router();

//Definir Rutas
router.get("/",(req, res)=> {
  res.send("GET Pagina Principal Express")
});

router.get("/productos", getProductos);
router.post("/productos", verificarToken,postProductos);
router.put("/productos/:id_producto", verificarToken,putProductos);
router.delete("/productos/:id_producto", verificarToken,deleteProductos);

router.get("/clientes", getClientes);
router.post("/clientes",verificarToken,postClientes);
router.put("/clientes/:id_cliente",verificarToken,putClientes);
router.delete("/clientes/:id_cliente", verificarToken,deleteClientes);

router.post("/login", loginAdministrador);
router.get("/administrador", verificarToken,getAdministrador);
router.post("/administrador",verificarToken,postAdministrador);
router.put("/administrador/:id_administrador", verificarToken,putAdministrador);
router.delete("/administrador/:id_administrador", verificarToken,deleteAdministrador);

router.get("/carro", getCarro);
router.post("/carro/:id_cliente", postCarro);
router.put("/carro", enviar);

export default router;

