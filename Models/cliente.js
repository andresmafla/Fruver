import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Cliente = sequelize.define(
  "clientes",
  {
    // Definicion de Atributos
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
      },
    direccion: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export { Cliente };
