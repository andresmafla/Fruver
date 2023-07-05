import { Producto } from "../Models/productos.js";

const getProductos = async(req, res) => {
    //res.send("GET Pagina Productos desde Controller");
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(400).json({ mensaje: err });
    }
};

const postProductos = async(req, res) => {
    //res.send("POST Pagina Productos desde Controller");
    const { nombre, detalle } = req.body;
    try {
        const newProducto = await Producto.create({
            nombre,
            detalle,
        });
        res.status(200).json(newProducto);
    } catch (error) {
        res.status(400).json({ mensaje: err });
    }
};

const putProductos = async(req, res) => {
    const { idProducto } = req.params;
    const { nombre, detalle } = req.body;
    try {
        const oldProducto = await Producto.findByPk(idProducto);
        oldProducto.nombre = nombre;
        oldProducto.detalle = detalle;
        const modProducto = await oldProducto.save();
        res.status(200).json(modProducto);
    } catch (error) {
        res.status(400).json({ mensaje: err });
    }
};

const deleteProductos = async(req, res) => {
    //res.send("DELETE Pagina Productos desde Controller");
    const { idProducto } = req.params;
    try {
        const respuesta = await Producto.destroy({
            where: {
                idProducto,
            },
        });
        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};

export { getProductos, postProductos, putProductos, deleteProductos };