const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

async function login(email, password) {

    const result = await pool.query(
        `SELECT *
         FROM users
         WHERE email = $1
         AND is_active = true`,
        [email]
    );

    const user = result.rows[0];

    if (!user) {
        return {
            success: false,
            message: "Invalid email or password"
        };
    } 
    
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
        return {
            success: false,
            message: "Invalid email or password"
        };
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role_id: user.role_id
        },
        JWT_SECRET,
        {
            expiresIn: JWT_EXPIRES_IN
        }
    ); 
    return {
        success: true,
        data: {
            user,
            token
        }
    };

}

async function getCurrentUser(id) {

    const result = await pool.query(
        `SELECT *
         FROM users
         WHERE id = $1
         AND is_active = true`,
        [id]
    );

    return result.rows[0];
}

module.exports = {
    login,
    getCurrentUser
};