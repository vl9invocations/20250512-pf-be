// * Run migrations using 'npm run migrate-db' command

import query from './connection';
import fs from 'fs/promises';
import path from 'path';

//? Add migrations here to be executed -----------------------------------------

const migrations: string[] = [
    '20250509_create_participants_table.sql',
]

//? ----------------------------------------------------------------------------

async function runMigrations(migrations: string[]) {
    migrations.map(async (migration) => {
        const filePath = path.resolve('src/db/migrations', migration);
        const sql = await fs.readFile(filePath, 'utf-8');
        query(sql, []);
    })
}

async function run() {
    try {
        await runMigrations(migrations);
        console.log('Migrations executed successfully');
    } catch (error) {
        console.error('Error executing migrations', error);
    }
}

run();