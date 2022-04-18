import { DataTypes } from "sequelize";
import { sequelize as conn } from "../../db/conn.js";
import { Toughts } from "./Toughts.js";


const User = conn.define('users', {
    name: {
        type: DataTypes.STRING(75),
        allowNull: false,
        require: true
    },
    password: {
        type: DataTypes.STRING(75),
        allowNull: false,
        require: false
    }
});

Toughts.belongsTo(User);
User.hasMany(Toughts);

export {User}