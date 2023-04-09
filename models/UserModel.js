import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    username:{
        type: DataTypes.STRING,
        allowNull: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
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