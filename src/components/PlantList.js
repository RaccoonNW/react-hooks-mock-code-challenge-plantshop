import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleDeleteClick, handleUpdatePlant}) {


  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          handleDeleteClick={handleDeleteClick}
          handleUpdatePlant={handleUpdatePlant}
        />

      ))}
    </ul>
  );
}

export default PlantList;
