import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Document = db.define('document',{
    document_id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    nama:{
        type: DataTypes.STRING,
        allowNull: true
    },
    filenama:{
        type: DataTypes.STRING,
        allowNull: true
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    freezeTableName:true
});

export default Document;