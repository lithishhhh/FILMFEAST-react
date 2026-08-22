const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());



const user = {
    email: "user@gmail.com",
    password: "0011"
};

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    if (email === user.email && password === user.password) {
        return res.status(200).json({
            message: "Login successful",
            success: true
        });
    }

    return res.status(401).json({
        message: "Invalid email or password",
        success: false
    });
});

app.listen(5000, function() {
    console.log("Server started...");
});