import { GlobalStyles } from "./styles/global.js";
import { Header } from "./components/Header/Header.jsx";

function App() {
    return (
        <>
        <Header/>
        <GlobalStyles/>
        <h1>Hello World!</h1>
        <p>Welcome to Next.</p>
        <button>Click me</button>
        <p>teste de branch</p>
        {/* atualização  */}
        </>
    );
}

export default App;
