import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FruitContext, FruitProviders } from "./providers/FruitContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FruitProviders>
      <App />
    </FruitProviders>
  </React.StrictMode>
);
