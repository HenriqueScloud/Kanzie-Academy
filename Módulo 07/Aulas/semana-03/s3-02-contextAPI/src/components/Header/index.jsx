import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <button>
                    <Link to="/">HomePage</Link>
                    </button>
                    <button>
                    <Link to="/AboutPage">AboutPage</Link>
                    </button>
                    <button>
                    <Link to="/ContactPage">ContactPage</Link>
                    </button>
                </nav>
            </header>
        </>
    );
};
