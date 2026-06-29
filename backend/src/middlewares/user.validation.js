function validateCreateUser(req, res, next) {

    const {
        role_id,
        full_name,
        email,
        phone,
        password_hash
    } = req.body;

    if (
        !role_id ||
        !full_name ||
        !email ||
        !phone ||
        !password_hash
    ) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    next();
}

module.exports = {
    validateCreateUser
};