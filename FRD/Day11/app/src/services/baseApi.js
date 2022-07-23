import axios from "axios";

const API_ENDPOINT = "http://localhost:3005/api";

const apiInstance = axios.create({
  baseURL: API_ENDPOINT,
});

export default apiInstance;
