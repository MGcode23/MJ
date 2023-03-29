import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function MyCard({ item, group, handleClick }) {
  if (group === "favorites") {
    group = item.url.substring(27, item.url.lastIndexOf("/"));
  }
  return (
    <Card className="small-card">
      <Link to={`${group}/${item.uid}`} id="small-card-img-link">
        <Card.Img
          variant="top"
          src={item.imgURL}
          alt={`picture of ${item.name}
        should go here
        May the Force be with You`}
        />
      </Link>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>

        {group === "people" ? (
          <ul>
            <li>Birth year: {item.birth_year}</li>
            <li>Height: {item.height}cm</li>
            <li>Weight: {item.mass}kg</li>
          </ul>
        ) : group === "planets" ? (
          <ul>
            <li>Climate: {item.climate}</li>
            <li>Day Length: {item.rotation_period} hours</li>
            <li>Population: {item.population} hab.</li>
          </ul>
        ) : group === "vehicles" ? (
          <ul>
            <li>Cost: {item.cost_in_credits} credits</li>
            <li>Passengers: {item.passengers} pax</li>
            <li>Length: {item.length}m</li>
          </ul>
        ) : (
          "loading"
        )}
<Button variant="outline-danger">
            <Link to={`${group}/${item.uid}`}>Details</Link>
        </Button>
        <Button variant="outline-primary" onClick={(e) => handleClick(e, item)}>
          {item.favorite ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
