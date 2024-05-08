import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <>
        <header>
          <nav>
            <button>
              <Link to="/HomePage">HomePage</Link>
            </button>
            <button>
              <Link to="/AboutPage">AboutPage</Link>
            </button>
            <button>
              <Link to="/ContactPage">ContactPage</Link>
            </button>
            <button>
              <Link to="/">RegisterPage</Link>
            </button>
          </nav>
        </header>
      </>
    );
};
