import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import DetailCard from "../component/detail-card.jsx";
import { Context } from "../store/appContext";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Detail() {
  const { store, actions } = useContext(Context);
  const { group, uid } = useParams();
  useEffect(() => {
    if (!infoLoaded) {
      actions.loadDetail(group, uid);
    }
  });
  function handleClick(_, item) {
    item.favorite ? actions.deleteFavorite(item) : actions.addToFavorites(item);
  }
  let groupArr, element, infoLoaded;
  const groupObj = store.data[group];
  if (groupObj) {
    groupArr = groupObj.results;
    for (let i = 0; i < groupArr.length; i++) {
      if (groupArr[i].uid === uid) {
        element = groupArr[i];
        break;
      }
    }
    infoLoaded = element.loaded;
  }

  return (
    <div className="container py-3">
      <Link to="/">
        <Button variant="dark" className="back-button">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                  Back 
        </Button>
      </Link>
      {infoLoaded ? (
        <DetailCard element={element} group={group} handleClick={handleClick} />
      ) : (
        <Spinner animation="border" variant="light" />
      )}
    </div>
  );
}

export default Detail;
