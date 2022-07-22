const {
    PORT,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env;

const database = {
    host: DB_HOST,
    port: DB_PORT,
    name: DB_NAME,
}
export default {
    database
}
