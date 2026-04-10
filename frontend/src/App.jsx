import axios from "../src/api/axios"
import { useState, useEffect } from "react"

function App() {
    const [message, setMessage] = useState("");
    const [authReq, setAuthReq] = useState("");

    async function AuthRequest() {
        try {
            const res = await axios.get("/auth-request");
            setAuthReq(res.data.response);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        axios.get("/api/test")
            .then(res => {
                setMessage(res.data.message);
            })
            .catch(err => console.error(err));

        AuthRequest();
    }, [])

    return (
        <>
            {message}
            {authReq}
        </>
    )
}

export default App;