import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000", 
    withCredentials: true, // Important for cookies (JWT tokens)
});

export default API;