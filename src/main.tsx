import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
import { HelixProvider } from "./HelixProvider";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelixProvider>
      <App />
    </HelixProvider>
  </StrictMode>,
);
