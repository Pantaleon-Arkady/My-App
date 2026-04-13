import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage.jsx';
import HomePage from "./pages/HomePage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const el = document.getElementById("root");

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);
