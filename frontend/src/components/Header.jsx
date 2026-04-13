import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import axios from "../api/axios";
import Mobilenav from "./Mobilenav";

function Headers({ rightFeature, page }) {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("/logout", {}, { withCredentials: true });
            logout();
            navigate("/");
        } catch (error) {
            const data = error.response?.data;
            console.error(data?.message || "Logout failed");
            alert(data?.message || "Logout failed");
        }
    };

    const handleHome = () => {
        navigate("/home");
    }

    return (
        <div className="main_header_div bg-black px-3 py-4 text-center d-flex flex-row justify-content-start justify-content-md-between text-white">

            <div className="mobile_header_feature d-flex d-md-none">
                <Mobilenav
                />
            </div>

            <div className="header-app-name text-center text-md-start fs-2 fw-bold d-flex flex-row justify-content-between">
                <div
                    className={`
                    ${page === "post" ? "d-none d-md-block" : ""}
                    `}
                >
                    Workout Tracker
                </div>
            </div>

            <div className="w-25 flex-row justify-content-around d-none d-md-flex">
                <button
                    onClick={handleHome}
                    className="btn btn-outline-primary"
                >
                    Home
                </button>
                <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

        </div>
    )
}

export default Headers;