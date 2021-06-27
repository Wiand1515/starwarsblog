import React, { useContext } from "react";
import { Context } from "../store/appContext";

function Favorites() {
  const { store, actions } = useContext(Context);
  const { favorite } = store;

  const result = new Set(favorite);
  const arrfilter = [...result];

  localStorage["datas"] = JSON.stringify(arrfilter);
  const storagedData = JSON.parse(localStorage["datas"]);

  console.log(storagedData);

  return (
    <>
      <div className="background fav col-12">
        <h1 className="text-center">Favoritos</h1>

        <div className="container my-5">
          <ul className="list-group list-group-flush border w-25 ">
            {!!storagedData && storagedData.length > 0 ? (
              storagedData.map((el, i) => (
                <li key={i} className="list-group-item">
                  Favorite: {el}
                </li>
              ))
            ) : (
              <li className="list-group-item">Favorite: Sin favoritos</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Favorites;
