import React from "react";
import { Outlet } from "react-router-dom";
import ItemsData from "../data/ItemsData";
import ItemRow from "./ItemRow";

function Items() {
  const items = ItemsData();
  return (
    <div>
      <h1>Items</h1>
      <p>Select item to show</p>
      <table>
        <tr>
          <th>Item</th>
          <th>Action</th>
        </tr>
        {items.map((item) => (
          <ItemRow key={item.id} item={item} />
        ))}
      </table>

      <Outlet/>
    </div>
  );
}

export default Items;
