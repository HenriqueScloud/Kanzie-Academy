
import "./styles/index.css"
import { Header } from "./components/Header/Header";
import { TitleSection } from "./components/titleSection/titleSection";
import { MainSection } from "./components/MainSection/MainSection";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header/>
      <TitleSection/>
      <main>
        <MainSection/>
      </main>
      <Footer/>
    </>
  )
}
export default App
