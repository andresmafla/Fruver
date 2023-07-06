import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Detalledecompra = sequelize.define(
  "detalledecompra",
  {
    // Definicion de Atributos
    id_detalle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

  },
  {
    tableName: 'detalledecompra',
    timestamps: false,
  }
);

export { Detalledecompra };
