import Headers from "../components/Header"
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HomePage() {
    const location = useLocation();
    const { user, loading } = useAuth();

    if (loading) {
        return <p className="text-black">Loading...</p>;
    }

    const fromRegister = location.state?.fromRegister;

    return (
        <div className="text-white">
            <Headers

            />
            <div className="page_contents bg-black">
                {user ? (
                    fromRegister ? (
                        <div className="text-green-400 text-2xl mb-4">
                            Welcome, {user.username}! You are now registered. 🎉
                        </div>
                    ) : (
                        <div className="text-xl mb-4">
                            Welcome back, {user.username}
                        </div>
                    )
                ) : (
                    <div>Please log in</div>
                )}
            </div>
        </div>
    )
}

export default HomePage;