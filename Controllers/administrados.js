import { Administrador } from "../Models/administrador.js";
import jwt from 'jsonwebtoken';

//manejo de clientes

const loginAdministrador = async (req, res) => {
    const admin = req.body;
    try{    
        const admin2 = await Administrador.findOne({
            where: {
                correo_electronico: admin.correo_electronico
            }
        });
        if (admin2){
            if (admin2.contraseña != admin.contraseña ){
                return res.status(401).json({message: "Datos incorrectos"});
            }else if(admin2.contraseña == admin.contraseña){
                const datos = { correo_electronico: admin2.correo_electronico, nombre: admin2.nombre};
                const token = jwt.sign(datos, "SECRET", {expiresIn: '1h'})
                return res.status(200).json({token: token});
            }else{
                return res.status(400).json({message: "Error"});
            }
        }else{
            return res.status(500).json({message: "Administrador no existe"});
        }
    }catch(err){
        return res.status(500).json(err);
    }
};

const getAdministradores = async (req, res) => {
    //res.send("GET Pagina Productos desde Controller");
    try {
        const administrador = await Administrador.findAll();
        res.status(200).json(administrador);
    } catch (error) {
        res.status(400).json({ mensaje: err });
    }
};

const getAdministrador = async (req, res) => {
    const {id_administrador}=req.params;
    try {
      const administrador = await Administrador.findByPk(id_administrador);
      res.status(200).json([administrador]);
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

export { getAdministradores, getAdministrador, postAdministrador, putAdministrador, deleteAdministrador, loginAdministrador};

  
  