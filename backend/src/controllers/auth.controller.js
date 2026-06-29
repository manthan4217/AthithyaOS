const authService = require("../services/auth.service");

async function login(req, res) {

    try {

        console.log("➡️ Login API called");

        const { email } = req.body;

        console.log("📧 Email:", email);

        const user = await authService.login(email);

        console.log("👤 User:", user);

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        res.json({
            message: "User found",
            data: user
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

}

module.exports = {
    login
};