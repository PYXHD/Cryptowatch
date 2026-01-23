import axios from "axios";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import colors from "../styles/_settings.module.scss";

function CoinChart({ coinId, coinName }) {
  const [duration, setDuration] = useState(30);
  const [coinData, setCoinData] = useState();

  const headerData = [
    { value: 1, label: "1 jour" },
    { value: 3, label: "3 jours" },
    { value: 7, label: "7 jours" },
    { value: 30, label: "1 mois" },
    { value: 91, label: "3 mois" },
    { value: 181, label: "6 mois" },
    { value: 365, label: "1 an" },
    { value: 3000, label: "Max" },
  ];

  useEffect(() => {
    let dataArray = [];
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`,
      )
      .then((res) => {
        for (let i = 0; i < res.data.prices.length; i++) {
          let date = res.data.prices[i][0];
          let price = res.data.prices[i][1];

          dataArray.push({
            date: new Date(date).toLocaleDateString(),
            price: price < "50" ? price : parseInt(price),
          });
        }
        setCoinData(dataArray);
      });
  }, [coinId, duration]);

  return (
    <div className="coin-chart">
      <p>{coinName}</p>
      <div className="btn-container">
        {headerData.map(({ value, label }) => (
          <div
            key={value}
            className={value === duration ? "active-btn" : ""}
            onClick={() => setDuration(value)}
          >
            {label}
          </div>
        ))}
      </div>
      <AreaChart
        width={680}
        height={250}
        data={coinData}
        margin={{ top: 10, right: 0, left: 100, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="7%" stopColor={colors.color1} stopOpacity={0.8} />
            <stop offset="93%" stopColor={colors.white1} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke={colors.color1}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
}

export default CoinChart;
