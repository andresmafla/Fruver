import { Producto } from "../Models/productos.js";

// manejo de productos

const getProductos = async (req, res) => {
  //res.send("GET Pagina Productos desde Controller");
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const postProductos = async (req, res) => {
  //res.send("POST Pagina Productos desde Controller");
  const { nombre, precio, cantidad_disponible } = req.body;
  try {
    const newProducto = await Producto.create({
      nombre,
      precio,
      cantidad_disponible,
    });
    res.status(200).json(newProducto);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const putProductos = async (req, res) => {
  const { id_producto } = req.params;
  const { nombre, precio, cantidad_disponible } = req.body;
  try {
    const producto = await Producto.findByPk(id_producto);
    producto.nombre = nombre;
    producto.precio = precio;
    producto.cantidad_disponible = cantidad_disponible;
    const productos = await producto.save();
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const deleteProductos = async (req, res) => {
  //res.send("DELETE Pagina Productos desde Controller");
  const { id_producto } = req.params;
  try {
    const respuesta = await Producto.destroy({
      where: {
        id_producto,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};


export { getProductos, postProductos, putProductos, deleteProductos};
