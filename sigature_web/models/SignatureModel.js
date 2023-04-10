import { Sequelize } from "sequelize";
import db from "../config/Database.js";
// import Users from "./UserModel.js";
// import Document from "./models/DocumentModel.js";

const { DataTypes } = Sequelize;

const Signature = db.define('signature',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
        // references: 'users',
        // referencesKey : 'id'
    },
    document_id:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
        // references: 'document',
        // referencesKey : 'document_id'
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
// Signature.associate = (models) => {
//     Signature.belongsTo(Users, {foreignKey: 'id', as: 'id'}),
//     Signature.belongsTo(Document, {foreignKey: 'document_id', as: 'document_id'});
// };


export default Signature;