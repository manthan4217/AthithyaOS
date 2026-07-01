const userService = require("../services/users.service");

async function getUsers(req, res) {
    try {
        const users = await userService.getAllUsers(req.user);

        res.json(users);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });
    }
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};

async function createUser(req, res) {

    try {

        const newUser = await userService.createUser(req.body);

        const { password_hash, ...safeUser } = newUser;

        res.status(201).json({
            message: "User created successfully",
            data: safeUser
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

}

async function getUserById(req, res) {

    try {

        const id = req.params.id;

        const user = await userService.getUserById(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(user);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

}

async function updateUser(req, res) {

    try {

        const id = req.params.id;
        const userData = req.body;

        const updatedUser = await userService.updateUser(id, userData);

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User updated successfully",
            data: updatedUser
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

}

async function deleteUser(req, res) {

    try {

        const id = req.params.id;

        const deletedUser = await userService.deleteUser(id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted successfully",
            data: deletedUser
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });

    }

}