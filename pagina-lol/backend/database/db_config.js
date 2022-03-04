const Pool = require('pg');
const contraseña = require('./password');

const config = {
    user: 'postgres',
    host: 'host',
    database: '',
    password: contraseña,
    port: 5432
}

const pool = new Pool(config);
module.exports = pool;