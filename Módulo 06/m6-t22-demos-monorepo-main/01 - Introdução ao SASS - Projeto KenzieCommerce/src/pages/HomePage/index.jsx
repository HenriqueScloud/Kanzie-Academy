import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <ProductSection />
      </main>
    </>
  );
};
