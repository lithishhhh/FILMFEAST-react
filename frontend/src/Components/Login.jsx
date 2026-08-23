import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (evt) => {

        evt.preventDefault();

        setError("");

        
        if (!email || !password) {
            setError("Please enter email and password");
            return;
        }

       
    try {
    const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        {
            email,
            password
        }
    );

    console.log("Backend response:", response.data);

    if (response.status === 200) {
        navigate("/dashboard");
    }

} catch (error) {
    if (error.response) {
        setError(error.response.data.message);
    } else {
        setError("Unable to connect to server");
    }
}
    }

    return (
        <div className="login-page">

            <div className="overlay"></div>

            <div className="login-container">

                <h1 className="logo">FILM<span>FEAST</span></h1>

                <div className="login-box">

                    <h2>Sign In</h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="email"
                            placeholder="Email or mobile number"
                            value={email}
                            onChange={(evt) => setEmail(evt.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(evt) => setPassword(evt.target.value)}
                        />

                        {error && (
                            <p className="error-message">
                                {error}
                            </p>
                        )}

                        <button type="submit">
                            Sign In
                        </button>

                    </form>

                    <div className="login-options">

                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <span>
                            Need help?
                        </span>

                    </div>

                    <p className="signup-text">
                        New to Film Feast?
                        <span> Sign up now.</span>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;