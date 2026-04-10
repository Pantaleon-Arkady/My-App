import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage.jsx';

const el = document.getElementById("root");

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
);
