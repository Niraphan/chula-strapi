/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "mysql2",
        connection: {
            host: "localhost", // Change to your MySQL host if different
            user: "root",
            password: "0969422653",
            database: "chula_strapi",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./database/migrations",
        },
    },

    staging: {
        client: "mysql2",
        connection: {
            host: "your_staging_host",
            user: "your_staging_user",
            password: "your_staging_password",
            database: "your_staging_db",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./migrations",
        },
    },

    production: {
        client: "mysql2",
        connection: {
            host: "your_production_host",
            user: "your_production_user",
            password: "your_production_password",
            database: "your_production_db",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./migrations",
        },
    },
}
