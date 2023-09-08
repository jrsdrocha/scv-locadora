/* export const databaseConfig = {
    dialect: 'sqlite',
    storage: 'database.sqlite',
    define: {
        timesTamps: true,
        freezeTableName: true,
        underscored: true
    }
};   */

export const databaseConfig = {
    dialect: "postgres",
    host: "dpg-cjth6d15mpss73erkeng-a.oregon-postgres.render.com",
    username: "scv_locadora_user",
    password: "gHReQhmsRAhCPpA4LXSMBthyn1IBDzNT",
    database: "scv_locadora_db",
    define: {
        timestampo: true,
        freezeTableName: true,
        underscored: true
    },
    dialectOptions: {
        ssl: true
    }
};  
