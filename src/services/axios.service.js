import axios from "axios";

import {baseURL} from "../config";


const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    const access = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjYwMTFhNDY4Zjg1Y2YwOGE1N2YyOWY0Mzk4MTM2MyIsInN1YiI6IjYzNGFhZTAyYzhhMmQ0MDA3YTJmYzk2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tTT3Ks3oECts6r8-n2ZUKl1hsmlhJNYGRU9tPx39w2g";
    config.headers.Authorization = `Bearer ${access}`
    return config
})

export {axiosService}