import pg from 'pg'
import fs from 'fs';

const { Pool } = pg;

process.loadEnvFile();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PSSWD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : undefined,
    database: process.env.DB_NAME,
    schema: process.env.DB_SCHEMA,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.DB_CA_PATH ? fs.readFileSync(process.env.DB_CA_PATH).toString() : undefined, // Certificate Authority (CA) certificate
        key: process.env.DB_KEY_PATH ? fs.readFileSync(process.env.DB_KEY_PATH).toString() : undefined, // Client private key
        cert: process.env.DB_CERT_PATH ? fs.readFileSync(process.env.DB_CERT_PATH).toString() : undefined, // Client certificate
    },
};

const pool = new Pool(config);
export default async function query(text: string, params: any[]): Promise<pg.QueryResult<any>> {
    if (!text) {
        return Promise.reject(new Error('Query text is required'));
    }
    return pool.query(text, params);
}

