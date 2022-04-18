import express from "express";
import hbs from "express-handlebars";

import "dotenv/config";

import flash from "express-flash";

import {mainRTS} from "./routes/main.rts.js";

import {sequelize as conn} from "../db/conn.js";

// Models
import { Toughts } from "./models/Toughts.js";
import { User } from "./models/User.js";

const app = express();

app.engine("handlerbars", hbs.engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static("../public"));
app.use(flash())

app.use((req, res, next)=>{

    try {
        if(req.session.userId){
            res.locals.session = req.session; 
        }
    } catch (e) {
        console.log(e);
    }
    next();
})


app.use(mainRTS);


conn
    .sync({
        force: true
    })
    .then(()=>{
        app.listen(3000);
        console.log("App running in port 3000");
    })
    .catch((e)=>{
        console.log(e);
    });