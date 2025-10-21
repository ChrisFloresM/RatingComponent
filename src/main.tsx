import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import RatingContextProvider from "./context/RatingContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RatingContextProvider>
      <App />
    </RatingContextProvider>
  </StrictMode>,
);
