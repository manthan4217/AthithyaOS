const pool = require("../config/db");

async function login(email) {

    const result = await pool.query(
        `SELECT *
         FROM users
         WHERE email = $1
         AND is_active = true`,
        [email]
    );

    return result.rows[0];
}

module.exports = {
    login
};