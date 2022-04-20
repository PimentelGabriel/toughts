import {Router} from 'express';
import { ToughtsCTR } from '../controllers/ToughtsCTL.js';
import { homeRTS } from './home.rts.js';



const toughtsRTS = Router();

toughtsRTS.get("/", ToughtsCTR.showToughts);

export {toughtsRTS};