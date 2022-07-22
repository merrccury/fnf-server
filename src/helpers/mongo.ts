import config from '../config';
import {Db, MongoClient} from 'mongodb'

const {host, port, name} = config.database;


export class DatabaseConnection {
    private static _database: DatabaseConnection;

    private constructor() {
    }

    public static getInstance(): DatabaseConnection {
        if (!this._database) {
            this._database = new DatabaseConnection();

        }
        return this._database;
    }

    async establishDatabaseConnection(): Promise<Db> {
        const databaseUrl = `mongodb://${host}:${port}/${name}`;
        const client = new MongoClient(databaseUrl);
        await client.connect();
        return client.db(name);
    }


}
