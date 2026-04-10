import axios from "../../src/api/axios";
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

function LandingPage() {
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
            <div className="border rounded text-white">{message}</div>
            {authReq}
            <Button variant="primary">Click me</Button>
        </>
    )
}

export default LandingPage;