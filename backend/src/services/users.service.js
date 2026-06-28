const pool = require("../config/db");

async function getAllUsers() {
    const result = await pool.query(
        "SELECT * FROM users"
    );

    return result.rows;
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser
};

async function createUser(userData) {

    const {
        role_id,
        full_name,
        email,
        phone,
        password_hash
    } = userData;

    const result = await pool.query(
        `INSERT INTO users
        (role_id, full_name, email, phone, password_hash)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
        [role_id, full_name, email, phone, password_hash]
    );

    return result.rows[0];
}

async function getUserById(id) {

    const result = await pool.query(
        "SELECT * FROM users WHERE id = $1",
        [id]
    );

    return result.rows[0];
}

async function updateUser(id, userData) {

    const {
    role_id,
    full_name,
    email,
    phone
} = userData;

    const result = await pool.query(
        `UPDATE users
        SET role_id = $2, full_name = $3, email = $4, phone = $5
        WHERE id = $1
        RETURNING *`,
        [id, role_id, full_name, email, phone]
    );

    return result.rows[0];
}