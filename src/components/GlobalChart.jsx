function GlobalChart({ coinsData }) {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    let chartData = [];

    if (coinsData.length > 0) {
      for (let i = 0; i < 45; i++) {
        chartData.push({
          name:
            coinsData[i].symbol.toUpperCase() +
            " " +
            coinsData(i).market_cap_change_percentage_24h.toFixed(1) +
            "%",
        });
      }
    }
  }, [coinsData]);

  return <div className="global-chart"></div>;
}

export default GlobalChart;
