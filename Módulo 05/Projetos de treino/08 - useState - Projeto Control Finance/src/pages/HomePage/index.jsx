import { Header } from "../../components/Header";
import { FinanceSection } from "../../components/sections/FinanceSection";

export const HomePage = () => {
  return (
    <>
      <Header />

      <main className="container">
        <FinanceSection />
      </main>
    </>
  );
};
