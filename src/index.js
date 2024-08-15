import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { TestProvider } from "./context/userContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TestProvider>
      <App />
    </TestProvider>
  </StrictMode>
);
