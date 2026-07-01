const authService = require("../services/auth.service");

async function login(req, res) {

    try {

        const { email, password } = req.body;

        const result = await authService.login(email, password);

        if (!result.success) {
            return res.status(401).json({
                message: result.message
            });
        }

        const { user, token } = result.data;

        const { password_hash, ...safeUser } = user;

        res.json({
            message: "Login successful",
            token,
            data: safeUser
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

}

async function getCurrentUser(req, res) {

    try {

        const id = req.user.id;

        const user = await authService.getCurrentUser(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const { password_hash, ...safeUser } = user;

        res.json({
            message: "Current user fetched successfully",
            data: safeUser
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

}

module.exports = {
    login,
    getCurrentUser
};