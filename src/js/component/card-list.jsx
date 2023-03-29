import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import MyCard from "./my-card.jsx";

function CardList({ obj, group }) {
  const { store, actions } = useContext(Context);
  function handleClick(_, item) {
    item.favorite ? actions.deleteFavorite(item) : actions.addToFavorites(item);
  }
  const list = obj.results.map((item) => {
    return (
      <MyCard
        item={item}
        key={item.url}
        group={group}
        handleClick={handleClick}
      />
    );
  });
  return (
    <>
      <h3 className="text-light">{group.toUpperCase()}</h3>
      <div className="horiz-group">{list}</div>
    </>
  );
}

export default CardList;
