import React, { useContext } from "react";
import "../../styles/home.css";
import CardList from "../component/card-list.jsx";
import { Context } from "../store/appContext";
import Spinner from "react-bootstrap/Spinner";

function Home() {
  const { store } = useContext(Context);
  let peopleObj = store.data.people;
  let planetsObj = store.data.planets;
  let vehiclesObj = store.data.vehicles;
  let favoritesObj = { results: store.data.favorites };


  return (
    <section className="container container-home">
      <h1 className="text-light">STAR WARS</h1>
      {store.data.favorites.length > 0 ? (
        <CardList obj={favoritesObj} group="favorites" />
      ) : (
        <div className="p-5 border border-light rounded">
          <h3 className="text-light text-center">FAVORITES</h3>
          <h6 className="text-light">Add favorites!</h6>
        </div>
      )}
      {peopleObj ? (
        <CardList obj={peopleObj} group="people" />
      ) : (
        <Spinner animation="border" variant="light" />
      )}
      {planetsObj ? (
        <CardList obj={planetsObj} group="planets" />
      ) : (
        <Spinner animation="border" variant="light" />
      )}
      {vehiclesObj ? (
        <CardList obj={vehiclesObj} group="vehicles" />
      ) : (
        <Spinner animation="border" variant="light" />
      )}
    </section>
  );
}

export default Home;
