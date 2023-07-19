import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";
import { Detalledecompra } from "./detalledecompra.js";

const Carrodecompra = sequelize.define(
  "carrodecompra",
  {
    // Definicion de Atributos
    id_carro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha:{
        type: DataTypes.DATEONLY,
        allowNull:false
    },
    total:{
        type: DataTypes.DOUBLE,
        allowNull:false,
    },
    estado:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }

  },
  {
    tableName: 'carrodecompras',
    timestamps: false,
  }
);

Carrodecompra.hasMany(Detalledecompra,{
    foreignKey: 'id_carro',
    sourceKey: 'id_carro'
});

Detalledecompra.belongsTo(Carrodecompra,{
    foreignKey: 'id_carro',
    sourceKey: 'id_carro'
});

export { Carrodecompra };
