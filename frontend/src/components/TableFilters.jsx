import { useDispatch, useSelector } from "react-redux";
import setListDisplay from "../action/list.action";
import setStableState from "../action/stable.action";

function TableFilters() {
  const dispatch = useDispatch();

  const showStable = useSelector((state) => state.stable.showStable);
  const showFavList = useSelector((state) => state.list.showList);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            checked={showStable}
            onChange={(e) => dispatch(setStableState(e.target.checked))}
          />
          <label htmlFor="stableCoin">
            {showStable ? "Avec stable coin" : "Sans stable coin"}
          </label>
        </div>

        <div
          className={showFavList ? "no-list-btn" : "no-list-btn active"}
          onClick={() => dispatch(setListDisplay(false))}
        >
          <p>Aucune liste</p>
        </div>

        <div
          className={showFavList ? "fav-list active" : "fav-list"}
          onClick={() => dispatch(setListDisplay(true))}
        >
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="icon star" />
        </div>
      </div>
    </div>
  );
}

export default TableFilters;
