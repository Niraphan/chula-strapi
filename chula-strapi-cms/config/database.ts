import path from "path"

export default ({ env }) => {
    const client = env("DATABASE_CLIENT")

    const connections = {
        mysql: {
            connection: {
                host: env("DATABASE_HOST", "localhost"),
                port: env.int("DATABASE_PORT", 3306),
                database: env("DATABASE_NAME", "chula_strapi"),
                user: env("DATABASE_USERNAME", "root"),
                password: env("DATABASE_PASSWORD", "0969422653"),
                ssl: env.bool("DATABASE_SSL", false) && {
                    key: env("DATABASE_SSL_KEY", undefined),
                    cert: env("DATABASE_SSL_CERT", undefined),
                    ca: env("DATABASE_SSL_CA", undefined),
                    capath: env("DATABASE_SSL_CAPATH", undefined),
                    cipher: env("DATABASE_SSL_CIPHER", undefined),
                    rejectUnauthorized: env.bool("DATABASE_SSL_REJECT_UNAUTHORIZED", true),
                },
            },
            pool: { min: env.int("DATABASE_POOL_MIN", 2), max: env.int("DATABASE_POOL_MAX", 10) },
            settings: {
                forceMigration: true, // Enable/disable forced database migration
                runMigrations: true, // Enable/disable migrations on startup
                useTypescriptMigrations: false, // Look for migrations in build dir instead of src dir
            },
        },
    }
    return {
        connection: {
            client,
            ...connections[client],
            acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
        },
    }
}
