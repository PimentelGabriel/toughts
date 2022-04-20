import { Toughts } from "../models/Toughts.js";
import { User } from "../models/User.js";

class ToughtsCTR{
    static async showToughts(req, res){
        try {
            return res.render("home");
        } catch (e) {
            console.log(e);
            console.error(e);
            return e;
        }
    }
}

export {ToughtsCTR};