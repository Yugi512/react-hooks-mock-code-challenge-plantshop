import React from "react";
import PlantCard from "./PlantCard";

function PlantList({search}) {
  return (
    <ul className="cards">{
      search.map((plant) => <PlantCard key={plant.id} plant={plant}/>)
    }</ul>
  );
}

export default PlantList;
