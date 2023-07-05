const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "fruver",
    port: "3306",
});

const getProductos = async(req, res) => {
    //res.send("get pagina productos desde controller");
    await pool.query("SELECT * FROM producto", (err, data) => {
        if (err) {
            console.error(err);
            res.status(400).json({ mensaje: err });
        } else {
            console.log(data);
            res.status(200).json(data);
        }
    })
}

const postProductos = async(req, res) => {
    //res.send("post pagina productos desde controller");
    const { nombre, precio, cantidad } = req.body;
    await pool.query(`INSERT INTO producto(nombre, precio, cantidad_disponible) VALUES('${nombre}', '${precio}', '${cantidad}')`, (err, data) => {
        if (err) {
            console.error(err);
            res.status(400).json({ mensaje: err });
        } else {
            console.log(data);
            res.status(200).json({
                body: {
                    producto: {
                        nombre: nombre,
                        precio: precio,
                        cantidad: cantidad,
                    }
                }
            });
        }
    })
}

const putProductos = async(req, res) => {
    //res.send("put pagina productos desde controller");
    const { idproducto } = req.params;
    const { nombre, precio, cantidad } = req.body;
    await pool.query(`UPDATE producto set nombre='${nombre}', precio='${precio}', cantidad_disponible='${cantidad}' WHERE id_producto='${idproducto}'`, (err, data) => {
        if (err) {
            console.error(err);
            res.status(400).json({ mensaje: err });
        } else {
            console.log(data);
            res.status(200).json({
                body: {
                    producto: {
                        nombre: nombre,
                        precio: precio,
                        cantidad: cantidad,
                    }
                }
            });
        }
    })
};

const deleteProductos = async(req, res) => {
    //res.send("delete pagina productos desde controller");
    const { idproducto } = req.params;
    await pool.query(`DELETE FROM producto WHERE id_producto='${idproducto}'`, (err, data) => {
        if (err) {
            console.error(err);
            res.status(400).json({ mensaje: err });
        } else {
            console.log(data);
            res.status(200).json({
                body: {
                    mensaje: `Resgistro con id ${idproducto} eliminado satisfactoriamente `
                }
            });
        }
    })
}

module.exports = {
    getProductos,
    postProductos,
    putProductos,
    deleteProductos
}