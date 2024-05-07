import React,{useState} from "react";

function PlantCard({plant}) {
  const{id,image,name,price} = plant;
  const [isInstock, setIsInStock] = useState(true)

  function haandleCLick(){
    setIsInStock(!isInstock)
  }

  return (
    <li className="card" id={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInstock ? (
        <button className="primary" onClick={haandleCLick}>In Stock</button>
      ) : (
        <button onClick={haandleCLick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
