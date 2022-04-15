import express from "express";
import { json } from 'body-parser';
import {mainRoute} from './routes/main'
const app = express();


app.use(json());
app.use(mainRoute)




export default app