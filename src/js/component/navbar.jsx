import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoritesList from "./favorites-list.jsx";
import { Context } from "../store/appContext.js";
import Form from "react-bootstrap/Form";
import SearchList from "./search-list.jsx";

export const Navbar = () => {
  const { store } = useContext(Context);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let storeData = [];
  let people, planets, vehicles;
  let peopleObj = store.data.people;
  let planetsObj = store.data.planets;
  let vehiclesObj = store.data.vehicles;

  if (peopleObj) {
    people = store.data.people.results;
    for (let person of people) {
      storeData.push(person);
    }
  }
  if (planetsObj) {
    planets = store.data.planets.results;
    for (let planet of planets) {
      storeData.push(planet);
    }
  }
  if (vehiclesObj) {
    vehicles = store.data.vehicles.results;
    for (let vehicle of vehicles) {
      storeData.push(vehicle);
    }
  }

  function handleChange(e) {
    let tempResults = [];
    setSearch(e.target.value);
    for (let dataElm of storeData) {
      if (dataElm.name.toLowerCase().search(e.target.value) !== -1) {
        tempResults.push(dataElm);
      }
    }
    setSearchResults(tempResults);
  }
  function handleClick() {
    setSearch("");
  }
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
    <div className="container">
      <Link to="/" className="navbar-brand">
        <img src="https://s.yimg.com/ny/api/res/1.2/ucdFBUScjz_c5BaaiSQfbw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTExNzk7Y2Y9d2VicA--/https://media.zenfs.com/en/usa_today_sports_articles_558/70333c62d7ae15076f27d82d14a06957" alt="Logo de Star Wars" width="150px" />
      </Link>
      <div className="ml-auto d-flex gap-3">
        <div className="position-relative">
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => handleChange(e)}
              className="mr-2"
            />
            <button className="btn btn-primary">Search</button>
          </Form>
          <SearchList
            list={searchResults}
            text={search}
            handleClick={handleClick}
          />
        </div>
        <FavoritesList favs={store.data.favorites} />
      </div>
    </div>
  </nav>
  );
};
