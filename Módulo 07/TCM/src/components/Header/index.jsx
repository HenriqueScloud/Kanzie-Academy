import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <button>
                    <Link to="/dashboard">dashboard</Link>
                    </button>
                    <button>
                    <Link to="/">login</Link>
                    </button>
                    <button>
                    <Link to="/register">register</Link>
                    </button>
                </nav>
            </header><br /><br /><br />
        </>
    );
};
