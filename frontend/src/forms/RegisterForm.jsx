import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function validateForm() {
        const newErrors = {};

        if (!username.trim()) {
            newErrors.username = "Username is required.";
        }

        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }

        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        try {
            await axios.get("/sanctum/csrf-cookie");
        
            const { data } = await axios.post("/register", {
                username,
                email,
                password
            });

            navigate("/");
        
        } catch (error) {
            console.error(error.response?.data);
            alert("Failed to register");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form_div border mt-3 p-3 rounded bg-white text-black d-flex flex-column align-items-center">
            <h4 className="fw-bold">Register</h4>

            <div className="input_divs">
                <label>Email:</label>
                <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                />
                {errors.email && <div className="text_sz text-light bg-danger rounded py-1 px-3 mt-1">{errors.email}</div>}
            </div>

            <div className="input_divs">
                <label>Username:</label>
                <input
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username..."
                />
                {errors.username && <div className="text_sz text-light bg-danger rounded py-1 px-3 mt-1">{errors.username}</div>}
            </div>

            <div className="input_divs">
                <label>Password:</label>
                <input
                    type="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password..."
                />
                {errors.password && <div className="text_sz text-light bg-danger rounded py-1 px-3 mt-1">{errors.password}</div>}
            </div>

            <button className="btn btn-success btn-fs w-50">
                Register
            </button>
        </form>
    );
}

export default RegisterForm;
