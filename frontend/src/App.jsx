import axios from "../src/api/axios"
import { useState, useEffect } from "react"

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("/api/test")
            .then(res => {
                setMessage(res.data.message);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            {message}
        </>
    )
}

export default App;