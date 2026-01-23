import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export const getGlobal = async () => {
    try {
        const res = await axios.get(`${API_URL}/api/global`);
        return res.data;
    } catch (err) {
        console.error("Erreur getGlobal: ", err);
        throw err;
    }
};

export const getCoins = async () => {
    try {
        const res = await axios.get(`${API_URL}/api/coins`);
        return res.data;
    } catch (err) {
        console.error("Erreur getCoins: ", err)
        throw err;
    }
}
