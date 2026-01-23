import { useEffect, useState } from "react";
import GlobalChart from "./components/GlobalChart";
import HeaderInfos from "./components/HeaderInfos";
import { getCoins } from "./api";
import Table from "./components/Table";
import ToTop from "./components/ToTop";

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setIsLoading(true);
        const data = await getCoins();
        setCoinsData(data);
      } catch (err) {
        setError("Impossible de charger les données");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoins();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 145) {
        document.querySelector(".table-header").classList.add("active");
      } else {
        document.querySelector(".table-header").classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
      <ToTop />
    </div>
  );
}

export default App;
