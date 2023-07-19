import { Detalledecompra } from "../Models/detalledecompra.js";
import { Carrodecompra } from "../Models/carrodecompra.js";
import { Producto } from "../Models/productos.js";
import { Cliente } from "../Models/cliente.js";
import nodemailer from 'nodemailer';

const getCarro = async (req, res) => {
    try {
        const carros = await Carrodecompra.findAll({
            attributes: ['id_carro', 'fecha', 'total', 'estado'],
            where: { estado: false },
            include: [
                {
                    model: Cliente,
                    required: true,
                },
                {
                    model: Detalledecompra,
                    attributes: ['id_detalle', 'cantidad'],
                    required: true,
                    include: [{
                        model: Producto,
                        required: true
                    }]
                }
            ]
        });
        return res.status(200).json(carros);
    } catch (err) {
        return res.status(400).json({ message: err });
    }
};

const postCarro = async (req, res) => {
    const { id_cliente } = req.params;
    const carro = req.body;
    try {
        const nuevoCarro = await Carrodecompra.create({
            fecha: Date.now(),
            total: carro.total,
            estado: false,
            id_cliente: id_cliente,
        });

        carro.listaProductos.forEach(async (producto) => {
            await Detalledecompra.create({
                cantidad: producto.cantidad,
                id_producto: producto.id_producto,
                id_carro: nuevoCarro.id_carro,
            });
        });
        return res.status(200).json({ message: "Registro satisfactorio" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "No se pudo registrar el pedido" });
    }
};


const enviar = async (req, res) => {
  const id_carro = req.body.id_carro;
  try {
    const carro = await Carrodecompra.findByPk(id_carro);
    carro.estado = true;
    const carro2 = await carro.save();

    // Configurar el transporte SMTP para Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'surtifruver977@gmail.com',
        pass: 'xsrmjmqkhjssngvt'
      }
    });

    // Configurar los detalles del correo electrónico
    const mailOptions = {
      from: 'surtifruver977@gmail.com',
      to: 'amafla572@gmail.com',
      subject: 'Estado de compra actualizado',
    };

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error al enviar el correo electrónico:', error);
      } else {
        console.log('Correo electrónico enviado correctamente:', info.response);
      }
    });

    res.status(200).json(carro2);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};




export { getCarro, postCarro, enviar };
