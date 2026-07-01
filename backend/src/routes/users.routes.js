const express = require("express");

const router = express.Router();

const { validateCreateUser } = require("../middlewares/user.validation");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/authorize.middleware");

const userController = require("../controllers/users.controller");

router.post("/", validateCreateUser, userController.createUser);

router.get("/:id", userController.getUserById);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

router.get("/", authMiddleware, authorize([1, 2]), userController.getUsers);
module.exports = router;    