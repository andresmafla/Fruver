import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Administrador = sequelize.define(
  "administrador",
  {
    // Definicion de Atributos
    id_administrador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    tableName: 'administrador',
    timestamps: false,
  }
);

export { Administrador };
