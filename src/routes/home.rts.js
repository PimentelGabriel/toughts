import { Router } from "express";

const homeRTS = Router();

homeRTS.get('/', (req, res)=>{
    res.render("/home", {
        title: "Home"
    });
})

export {homeRTS};