import { FinaceList } from "./components/FInanceList/FinanceList";
import { FinaceForm } from "./components/FinanceForm/FinanceForm";
import { Header } from "./components/Header/Header";
import { Total } from "./components/Total/Total";


function App() {
  return (
    <>
      <Header/>
      <main>
        <div>
          <FinaceForm/>
          <Total/>
        </div>
        <FinaceList/>
      </main>
    </>
  );
}

export default App;
