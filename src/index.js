import express from "express";
import hbs from 'express-handlebars';

import dotenv from 'dotenv/config';

import session from 'session-file-store';
import FileStore from 'session-file-store';
import flash from "express-flash";

import routesMAIN from './routes/routesMAIN.js';

import {sequelize as conn} from '../db/conn.js';

const app = express();

app.engine('handlerbars', hbs.engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


app.use(routesMAIN);


conn
    .sync()
    .then(()=>{
        app.listen(3000);
        console.log("App running in port 3000");
    })
    .catch((e)=>{
        console.log(e);
    });