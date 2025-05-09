import express from 'express';
import dotenv from 'dotenv';

import router from '../router/router';
import dbquery from '../db/connection';

dotenv.config();

(async () => {
    const res = await dbquery('SELECT version();', []);
    console.log(res.rows[0].version);
})();

const app = express();
app.use(express.json(), router);

export default app;