import express from "express";
import cors from "cors";
import configureRoutes from './routes/configureRoutes.js';
import apiErrorHandler from './middlewares/apiErrorHandler.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

configureRoutes(app);

app.use(apiErrorHandler);

export default app;