import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const peopleProperties = [
  "height",
  "mass",
  "hair_color",
  "skin_color",
  "eye_color",
  "birth_year",
  "gender",
]; 
const planetsProperties = [
  "population",
  "rotation_period",
  "orbital_period",
  "diameter",
  "gravity",
  "terrain",
  "surface_water",
  "climate",
];
const vehiclesProperties = [
  "model",
  "manufacturer",
  "vehicle_class",
  "cost_in_credits",
  "max_atmosphering_speed",
  "length",
  "cargo_capacity",
  "crew",
  "passengers",
];

function DetailCard({ element, group, handleClick }) {
  let unit; 
  const properties = Object.entries(element).map(([key, value]) => {
    if (group === "people") {
      unit = key === "height" ? "cm" : key === "mass" ? "kg" : "";
      if (peopleProperties.includes(key)) {
        key = key.replaceAll("_", " ");
        key = key[0].toUpperCase() + key.substring(1);
      } else return;
    } else if (group === "planets") {
      unit =
        key === "rotation_period" || key === "orbital_period"
          ? " days"
          : key === "diameter"
          ? "km"
          : "";
      if (planetsProperties.includes(key)) {
        key = key.replaceAll("_", " ");
        key = key[0].toUpperCase() + key.substring(1);
      } else return;
    } else if (group === "vehicles") {
      unit =
        key === "cost_in_credits"
          ? " credits"
          : key === "max_atmosphering_speed"
          ? "km/h"
          : key === "length"
          ? "m"
          : key === "cargo_capacity"
          ? "kg"
          : "";
      if (vehiclesProperties.includes(key)) {
        key = key.replaceAll("_", " ");
        key = key[0].toUpperCase() + key.substring(1);
      } else return;
    }
    return (
      <React.Fragment key={key}>
        <label htmlFor={key}>{key}:</label>
        <span name={key}>
          {value}
          {unit}
        </span>
        <br />
      </React.Fragment>
    );
  });
  return (
    <article>
      <Card className="detail-card">
        <Card.Header as="h3">
          {element.name}
          <Button
            variant="outline-warning"
            onClick={(e) => handleClick(e, element)}
          >
            {element.favorite ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </Button>
        </Card.Header>
        <Card.Body className="detail-card-body">
          <Card.Img src={element.imgURL} />
          <Card.Text>{properties}</Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
}

export default DetailCard;
