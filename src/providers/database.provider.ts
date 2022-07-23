import {MongoClient} from "mongodb";
import config from "../config";

const {host, port, name} = config.database;

export const databaseProvider = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const databaseUrl = `mongodb://${host}:${port}/${name}`;
            const client = new MongoClient(databaseUrl);
            await client.connect();
            return client.db(name);
        },
    }
];
