import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

function FavoritesList({ favs }) {
  const { actions } = useContext(Context);
  function handleClick(e, item) {
    actions.deleteFavorite(item);
    e.stopPropagation();
  }
  let relativePath;
  let list;
  if (favs.length > 0) {
    list = favs.map((item) => {
      relativePath = item.url.slice(27);
      return (
        <Dropdown.Item
          as="div"
          key={item.url}
          className="d-flex justify-content-between align-items-center"
        >
          <Link to={relativePath}>{item.name}</Link>
          <Button
            variant="outline-danger border-0"
            onClick={(e) => handleClick(e, item)}
          >
            <i className="fa-regular fa-trash-can"></i>
          </Button>
        </Dropdown.Item>
      );
    });
  } else {
    list = (
      <Dropdown.Item as="div" className="py-2 ps-4">
        {"(empty)"}
      </Dropdown.Item>
    );
  }
  return (
    <Dropdown autoClose={false} align="end">
      <Dropdown.Toggle variant="light">
        Favorites <Badge bg="dark">{favs.length}</Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu>{list}</Dropdown.Menu>
    </Dropdown>
  );
}

export default FavoritesList;
