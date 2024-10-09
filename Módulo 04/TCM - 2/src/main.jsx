import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TodoProvider } from "./providers/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    < TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);
