import React from "react";
import { useParams } from "react-router-dom";
import ItemsData from "../data/ItemsData";

function Item() {
  let params = useParams();
  let items = ItemsData();
  let item = items.find((item) => item.id === Number(params.itemId));

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Power : {item.power}</p>
    </div>
  );
}

export default Item;
