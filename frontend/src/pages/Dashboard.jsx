import { useNavigate } from "react-router-dom";
import "./Dashboard.css";


import english from "./assets/english.jpg";
import tamil from "./assets/tamil.jpg";
import hindi from "./assets/hindi.jpg";
import telugu from "./assets/telugu.jpg";
import malayalam from "./assets/malayalam.jpg";
import kannada from "./assets/kannada.jpg";
import korean from "./assets/korean.jpg";
import japanese from "./assets/japanese.jpg";

function Dashboard() {

    const navigate = useNavigate();

    const languages = [
        { name: "English", image: english },
        { name: "Tamil", image: tamil },
        { name: "Hindi", image: hindi },
        { name: "Telugu", image: telugu },
        { name: "Malayalam", image: malayalam },
        { name: "Kannada", image: kannada },
        { name: "Korean", image: korean },
        { name: "Japanese", image: japanese }
    ];

    const genres = [
        "Action",
        "Comedy",
        "Drama",
        "Thriller",
        "Horror",
        "Romance",
        "Sci-Fi",
        "Crime",
        "Adventure",
        "Animation"
    ];

    return (
        <div className="dashboard">

            <nav className="dashboard-nav">

                <h1 className="dashboard-logo">
                    FILM<span>FEAST</span>
                </h1>

                <button
                    className="signout-btn"
                    onClick={() => navigate("/")}
                >
                    Sign Out
                </button>

            </nav>


            <main className="dashboard-content">

                <div className="welcome-section">

                    <p className="small-heading">
                        WELCOME TO FILM FEAST
                    </p>

                    <h2>
                        What do you love watching?
                    </h2>

                    <p className="description">
                        Choose your favorite languages and genres
                        to explore the world of cinema.
                    </p>

                </div>


                {/* LANGUAGES */}

                <section className="preference-section">

                    <h3>
                        Select your language
                    </h3>

                    <div className="language-grid">

                        {languages.map((language) => (

                            <div
                                className="language-card"
                                key={language.name}
                            >

                                <img
                                    src={language.image}
                                    alt={language.name}
                                />

                                <div className="language-overlay">
                                    <span>
                                        {language.name}
                                    </span>
                                </div>

                            </div>

                        ))}

                    </div>

                </section>


                {/* GENRES */}

                <section className="preference-section">

                    <h3>
                        Pick your favorite genres
                    </h3>

                    <div className="genre-grid">

                        {genres.map((genre) => (

                            <div
                                className="genre-card"
                                key={genre}
                            >
                                {genre}
                            </div>

                        ))}

                    </div>

                </section>


                <button
                    className="continue-btn"
                    onClick={() => navigate("/Home")}
                >
                    Continue →
                </button>

            </main>

        </div>
    );
}

export default Dashboard;