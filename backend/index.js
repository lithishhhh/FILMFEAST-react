const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors({
    origin: "https://filmfeast-react-f48c-5tm9co0ik-lithishhhhs-projects.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());



const user = {
    email: "user@gmail.com",
    password: "0011"
};

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    

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

app.listen(process.env.PORT || 5000, function() {
    console.log("Server started...");
});