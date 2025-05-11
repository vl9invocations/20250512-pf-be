import express from 'express';
import dotenv from 'dotenv';

import router from '../router/router';
import dbquery from '../db/connection';
import cors from 'cors';

dotenv.config();

(async () => {
    try {
        const res = await dbquery('SELECT version();', []);
        console.log(res.rows[0].version);
    } catch (error) {
        console.log(error)
    }
})();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json(), router);

export default app;
