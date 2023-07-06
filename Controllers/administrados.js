import { Administrador } from "../Models/administrador.js";

//manejo de clientes

const getAdministrador = async (req, res) => {
    //res.send("GET Pagina Productos desde Controller");
    try {
        const administrador = await Administrador.findAll();
        res.status(200).json(administrador);
    } catch (error) {
        res.status(400).json({ mensaje: err });
    }
};
  
const postAdministrador = async (req, res) => {
//res.send("POST Pagina Productos desde Controller");
    const { nombre, apellido, correo_electronico, contraseña } = req.body;
    try {
        const newAdministrador = await Administrador.create({
        nombre,
        apellido,
        correo_electronico,
        contraseña,
        });
        res.status(200).json(newAdministrador);
    } catch (error) {
        res.status(400).json({ mensaje: err });
    }
};
  
const putAdministrador = async (req, res) => {
    const { id_administrador } = req.params;
    const { nombre, apellido, correo_electronico, contraseña } = req.body;
    try {
        const admin = await Administrador.findByPk(id_administrador);
        admin.nombre = nombre;
        admin.apellido = apellido;
        admin.correo_electronico = correo_electronico;
        admin.contraseña = contraseña;
        const administrador = await admin.save();
        res.status(200).json(administrador);
    } catch (error) {
        res.status(400).json({ mensaje: err });
    }
};
  
const deleteAdministrador = async (req, res) => {
//res.send("DELETE Pagina Productos desde Controller");
    const { id_administrador } = req.params;
    try {
        const respuesta = await Administrador.destroy({
        where: {
            id_administrador,
        },
        });
        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};

export { getAdministrador, postAdministrador, putAdministrador, deleteAdministrador};

  
  