import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Producto = sequelize.define(
  "productos",
  {
    // Definicion de Atributos
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.DOUBLE,
    },
    cantidad_disponible: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export { Producto };
