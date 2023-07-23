import React from "react";
import Item from "./Item";
import {useState} from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setselectedCategory]=useState("All")
 
const itemCategory=items.filter((item)=>{
  if (selectedCategory==="All"){
    return true
  }else{
    return item.category=== selectedCategory
  }
})
const changeHandler=(e)=>{
  e.preventDefault()
  setselectedCategory(e.target.value)
}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeHandler} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemCategory.map((item) => (
           <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
