const {Sequelize, DataTypes} = require('sequelize')
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const database = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    logging: false,
})

module.exports =  {database, DataTypes}