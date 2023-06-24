import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Document = db.define('document',{
    document_id:{
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: true
    },
    filenama:{
        type: DataTypes.STRING,
        allowNull: true
    },
    urlpdf:{
        type: DataTypes.STRING,
        allowNull: true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: true
    },
    username_to:{
        type: DataTypes.STRING,
        allowNull: true
    },
},{
    freezeTableName:true
});

export default Document;
