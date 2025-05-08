import express from 'express';
import dotenv from 'dotenv';

import router from '../router/router.js';
import DBconnection from '../db/connection.js';

dotenv.config();
DBconnection();

const app = express();
app.use(express.json(), router);

export default app;