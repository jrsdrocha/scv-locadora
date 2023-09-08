import express from "express";
import sequelize from "./config/database-connection.js";
import routes  from './routes.js';
import errorHandler from '../src/_middleware/error-handler.js'


const app = express();
app.use(express.json());
app.use(routes);
app.use(errorHandler); //Manipulador de erro global (erro handler)


app.listen(8080);