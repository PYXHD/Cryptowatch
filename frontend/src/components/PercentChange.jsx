import { useEffect, useState } from "react";
import colors from "../styles/_settings.module.scss";

function PercentChange({ percent }) {
  const [color, setColor] = useState(colors.white1);

  useEffect(() => {
    if (percent != null) {
      setColor(percent >= 0 ? colors.green1 : colors.red1);
    } else {
      setColor(colors.white1);
    }
  }, [percent]); //

  return (
    <p className="percent-change-container" style={{ color }}>
      {percent != null ? percent.toFixed(1) + "%" : "-"}
    </p>
  );
}

export default PercentChange;
