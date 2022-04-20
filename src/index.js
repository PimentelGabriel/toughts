import express from "express";
import exphbs from "express-handlebars";
import path from "path";

import "dotenv/config";

import flash from "express-flash";

import {toughtsRTS} from "./routes/toughts.rts.js";

import {sequelize as conn} from "../db/conn.js";

import {sessionMDWARE} from "./sessions/sessionCTLR.js"

// Models
// import { Toughts } from "./models/Toughts.js";
// import { User } from "./models/User.js";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set('views', process.env.ROOT + '/src/views');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static("../public"));

// app.use((req, res, next)=>{
//     try {  
//         // req.session.userId
//         if(true){
//             res.locals.session = req.session; 
//         }
//     } catch (e) {
//         console.log(e);
//     }
//     next();
// })

app.use(sessionMDWARE);

app.use(flash());

app.use(toughtsRTS);


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