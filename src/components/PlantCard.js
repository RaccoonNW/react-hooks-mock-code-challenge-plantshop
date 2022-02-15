import React, { useState } from "react";

function PlantCard({ handleDeleteClick, plant, handleUpdatePlant }) {
  const { id, name, image, price } = plant

  const [inStock, setInStock] = useState(true)
  const [priceUpdate, setPriceUpdate] = useState(price)

  function handleClick() {
    (inStock === true) ? setInStock(false) : setInStock(true)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    handleDeleteClick(id)
  }

  function handlePriceUpdate(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: priceUpdate }),
    })
      .then((r) => r.json())
      .then((updatedPlant) => {
        handleUpdatePlant(updatedPlant);
      });
  }




  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
      <form onSubmit={handlePriceUpdate}>
        <input
          type="number"
          step="0.01"
          placeholder="New price..."
          value={priceUpdate}
          onChange={(e) => setPriceUpdate(parseFloat(e.target.value))}
        />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
