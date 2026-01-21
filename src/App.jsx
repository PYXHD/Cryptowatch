import { useEffect, useState } from "react";
import GlobalChart from "./components/GlobalChart";
import HeaderInfos from "./components/HeaderInfos";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h,24h,7d,14d,30d,200d,1y",
      )
      .then((res) => {
        setCoinsData(res.data);
        setError(null);
      })
      .catch((err) => {
        setError("Impossible de charger les données");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Chargement des données…</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        <GlobalChart coinsData={coinsData} />
      </header>
      <Table coinsData={coinsData} />
    </div>
  );
}

export default App;
