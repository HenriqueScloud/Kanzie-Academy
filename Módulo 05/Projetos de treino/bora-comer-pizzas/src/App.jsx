
import "./styles/index.css";//aplicado em nivel global

import { Header } from "./components/Header/Header";
import { TitleSection } from "./components/Sections/titleSection/titleSection";
import { MainSection } from ".//components/Sections/MainSection/MainSection";
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

