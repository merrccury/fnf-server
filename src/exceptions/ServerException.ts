export class ServerException extends Error {
    constructor(message: string) {
        super(message);
    }

    getStatus = () => 502;
}
