import "./styles/index.css";


import { Header } from "./components/Header/Header";
import { BannnerSection } from "./components/sections/BannerSection/BannerSection";
import { ProductSection } from "./components/sections/ProductsSection/ProductsSection";
import { NewsLatterSection } from "./components/sections/NewsLatterSection/NewsLetterSection";
import { Footer } from "./components/Footer/Footer";


function App() {

  return (
    <>
    <h1>ola mundo </h1>

      <Header/>

      <main>

        <BannnerSection />
        <ProductSection />
        <NewsLatterSection />
      </main>

      <Footer/>
    </>
  )
}

export default App
