const { Router } = require('express');
const { getProductos, postProductos, putProductos, deleteProductos } = require('../Controllers/controllers');

const router = Router();

//definir rutas
router.get("/", (req, res) => {
    res.send("get pagina principal express")
});

router.get("/productos", getProductos);
router.post("/productos", postProductos);
router.put("/productos/:idproducto", putProductos);
router.delete("/productos/:idproducto", deleteProductos);

module.exports = router;