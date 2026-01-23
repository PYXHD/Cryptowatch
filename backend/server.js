import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Global market data
app.get("/api/global", async (req, res) => {
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/global");
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Erreur API" });
    }
});

// Coins list
app.get("/api/coins", async (req, res) => {
    try {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h,24h,7d,14d,30d,200d,1y";
        const response = await axios.get(url);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Erreur API" });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
