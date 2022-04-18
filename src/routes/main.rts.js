import {Router} from 'express';
import { homeRTS } from './home.rts.js';

const mainRTS = Router();

mainRTS.get("/", homeRTS);

export {mainRTS};