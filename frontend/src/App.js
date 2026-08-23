import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./App.css";


function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/dashboard"  element={<Dashboard />}/>

                

                <Route path="/Home" element={<Home/>}/>

            </Routes>

        </BrowserRouter>
    );
}

export default App;
