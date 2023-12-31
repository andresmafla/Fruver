import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";
import { Carrodecompra } from "./carrodecompra.js";

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
      allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    tableName: 'cliente',
    timestamps: false,
  }
);

Cliente.hasMany(Carrodecompra,{
  foreignKey: 'id_cliente',
  sourceKey: 'id_cliente'
});

Carrodecompra.belongsTo(Cliente,{
  foreignKey: 'id_cliente',
  sourceKey: 'id_cliente'
});

export { Cliente };
