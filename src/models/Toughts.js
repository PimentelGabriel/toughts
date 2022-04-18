import { DataTypes } from "sequelize";
import { sequelize as conn } from "../../db/conn.js";

const Toughts = conn.define('toughts', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        require: true
    }
});

export {Toughts}