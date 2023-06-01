import axios from "axios";

export default axios.create(
    {
        baseURL: "http://localhost:43387/api",
        headers: {
            "Content-Type":"application/json"
        }
    }
);
