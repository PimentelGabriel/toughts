import {Router} from 'express';

const routesMAIN = Router();

routesMAIN.get("/", (req, res)=>{
    res.json({
        msg: "Safe"
    });
})

export default routesMAIN;