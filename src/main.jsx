import { createRoot } from "react-dom/client";
import "./index.css";
import QuoteGenerator from "./components/QuoteGenerator";

createRoot(document.getElementById("root")).render(
  <>
    <QuoteGenerator />
  </>
);
