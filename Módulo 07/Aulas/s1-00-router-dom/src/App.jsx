import { Link } from "react-router-dom";
import { RoutesMain } from "./routers/RoutesMain";

function App() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">HomePage / </Link>
                    {/* os Links sao um recurso da biblioteca para acionar as rotas dentro do browser do navegador  */}
                    <Link to="/ContactPage">ContactPage / </Link>
                    <Link to="/AboutPage">AboutPage</Link>
                </nav>
            </header>
            <RoutesMain />
            {/* sempre criar uma nova pasta de routers para fazer o gerenciamento das rotas no main. importar ela para ca  */}
        </>
    );
}

export default App;
