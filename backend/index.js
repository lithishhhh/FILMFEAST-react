const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin:true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

const user = {
    email: "user@gmail.com",
    password: "0011"
};

app.get("/",(req,res) => {
  res.send("FilmFeast backend in running");

});

app.post("/api/login", (req, res) => {

    const { email, password } = req.body;

    if (email === user.email && password === user.password) {
        return res.send({
            message: "Login successful",
            success: true
        });
    }

    res.status(401).send({
        message: "Invalid email or password",
        success: false
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started");
});