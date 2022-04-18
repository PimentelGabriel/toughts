import Sequelize from "sequelize";

const sequelize = new Sequelize("toughts_db",
                            process.env.DB_USER,
                            process.env.DB_PWD,
                            {
                                host: process.env.DB_HOST,
                                port: process.env.DB_PORT,
                                dialect: "mysql"
                            });

try{
    sequelize.authenticate();
    console.log("Connection established successfully")
}catch(e){
    console.log("Connection failed");
}

export {sequelize};