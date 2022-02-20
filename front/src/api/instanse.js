import axios from "axios";
import { token } from "../services/tokenService";

const instance = axios.create({
    baseURL: process.env.REACT_APP_DOMAIN,
    timeout: 100000,
});

instance.interceptors.request.use((config) => {
    const accToken = token.getToken();
    if (accToken) {
        config.headers["Authorization"] = "Bearer " + accToken;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use(
    response => response,
    async error => {
        const config = error.config;
        if (!/login/.test(config.url) && error.response && token.getToken() !== '') {
            if (error.response.status === 401) {
                try {
                    const refresh = await instance.post("/api/auth/refresh", {
                        token: token.getToken()
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    const accessToken = refresh.data.access_token;
                    token.saveToken(accessToken);
                    return instance(config);
                } catch (err) {
                    token.removeToken()
                    return Promise.reject(err);
                }
            }
            return Promise.reject(error);
        }
        return Promise.reject(error);
    });

export default instance;