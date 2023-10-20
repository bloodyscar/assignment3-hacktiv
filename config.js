const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "",
    port: 5432,
})

// pool.connect((err) => {
//     if (err) {
//         console.error('Error connecting to PostgreSQL:', err);
//     } else {
//         console.log('Connected to PostgreSQL database');
//     }
// });

module.exports = pool;