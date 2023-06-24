// tidak digunakan
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Signature = db.define('signature',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        references: {
            model: Users,
            key: 'id'
        }
    },
    document_id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        references: 'document',
        referencesKey : 'document_id'
    },
    jabatan:{
        type: DataTypes.STRING,
        allowNull: true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: true
    },
    sign_at:  {
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    freezeTableName:true
});


export default Signature;