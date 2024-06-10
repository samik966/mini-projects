import App from "@/app/App.tsx";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark">
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
);
