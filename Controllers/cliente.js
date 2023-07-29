import { Cliente } from "../Models/cliente.js";

//manejo de clientes

const getClientes = async (req, res) => {
    //res.send("GET Pagina Productos desde Controller");
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(400).json({ mensaje: err });
    }
};

const getCliente = async (req, res) => {
    const {id_cliente}=req.params;
    try {
      const cliente = await Cliente.findByPk(id_cliente);
      res.status(200).json([cliente]);
    } catch (error) {
      res.status(400).json({ mensaje: err });
    }
  };
  
const postClientes = async (req, res) => {
//res.send("POST Pagina Productos desde Controller");
    const { nombre, apellido, direccion, telefono, correo } = req.body;
    try {
        const newCliente = await Cliente.create({
        nombre,
        apellido,
        direccion,
        telefono,
        correo
        });
        res.status(200).json(newCliente);
    } catch (error) {
        res.status(400).json({ mensaje: err });
    }
};
  
const putClientes = async (req, res) => {
    const { id_cliente } = req.params;
    const { nombre, apellido, direccion, telefono, correo } = req.body;
    try {
        const cliente = await Cliente.findByPk(id_cliente);
        cliente.nombre = nombre;
        cliente.apellido = apellido;
        cliente.direccion = direccion;
        cliente.telefono = telefono;
        cliente.correo = correo;
        const clientes = await cliente.save();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(400).json({ mensaje: err });
    }
};
  
const deleteClientes = async (req, res) => {
//res.send("DELETE Pagina Productos desde Controller");
    const { id_cliente } = req.params;
    try {
        const respuesta = await Cliente.destroy({
        where: {
            id_cliente,
        },
        });
        res.status(200).json({ mensaje: "Registro Eliminado" });
    } catch (error) {
        res.status(400).json({ mensaje: "Registro No Eliminado" + error });
    }
};

export { getClientes, getCliente ,postClientes, putClientes, deleteClientes};

  
  