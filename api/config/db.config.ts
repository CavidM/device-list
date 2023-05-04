import { ConnectionOptions } from "typeorm";
import { Device } from "../entity/device/Device";

export const getDbSettings = (): ConnectionOptions => {

    return {
        // "url": "jdbc:postgresql://localhost:5432/postgres",
        // "host": "localhost",
        "host": "postgres_db",
        "port": 5432,
        "username": "postgres",
        "password": "1234",
        "database": "device-list",
        "type": "postgres",
        "synchronize": true,
        "logging": false,
        "entities": [
            Device

        ],
        "migrations": [
            "../migration/*"
        ],
        "subscribers": [
            "../subscriber/*"
        ],
    }
};


