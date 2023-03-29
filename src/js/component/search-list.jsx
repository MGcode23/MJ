import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function SearchList({ list, text, handleClick }) {
  let items;
  text.length > 0
    ? (items = list.map((item) => {
        const group = item.url.substring(27, item.url.lastIndexOf("/"));
        return (
          <ListGroup.Item key={item.url} onClick={handleClick}>
            <Link to={`${group}/${item.uid}`}>{item.name}</Link>
          </ListGroup.Item>
        );
      }))
    : (items = "");
  return (
    { text } === "" || (
      <ListGroup className="position-absolute" id="my-search-list">
        {items}
      </ListGroup>
    )
  );
}

export default SearchList;
