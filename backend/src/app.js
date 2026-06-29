const express = require("express");

const usersRoutes = require("./routes/users.routes");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 Welcome to Yuganata Techonlogies AthithyaOS Backend!");
});

app.use("/users", usersRoutes);
app.use("/auth", authRoutes);

module.exports = app;