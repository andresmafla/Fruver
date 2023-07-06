import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";
import { Detalledecompra } from "./detalledecompra.js";

const Producto = sequelize.define("productos",{
    // Definicion de Atributos
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    cantidad_disponible: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'producto',
    timestamps: false,
  }
);

Producto.hasMany(Detalledecompra,{
  foreignKey: 'id_producto',
  sourceKey: 'id_producto'
});

Detalledecompra.belongsTo(Producto,{
  foreignKey: 'id_producto',
  sourceKey: 'id_producto'
});

export { Producto };
