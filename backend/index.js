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

    if (email === user.email && password === user.password) {
        res.send({
            message: "Login successful",
            success: true
        });
    } else {
        res.send({
            message: "Invalid email or password",
            success: false
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});