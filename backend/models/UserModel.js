import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },    
    username:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    active: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    sign_img :  {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true
});

export default Users;