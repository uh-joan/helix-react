import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/fonts.css";
import { HelixProvider } from "../src";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelixProvider>
      <App />
    </HelixProvider>
  </StrictMode>,
);
