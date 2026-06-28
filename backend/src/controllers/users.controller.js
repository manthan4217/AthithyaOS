const userService = require("../services/users.service");

async function getUsers(req, res) {
    try {
        const users = await userService.getAllUsers();

        res.json(users);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });
    }
}

module.exports = {
    getUsers
};