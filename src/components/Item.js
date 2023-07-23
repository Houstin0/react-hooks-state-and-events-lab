import React,{useState} from "react";

function Item({ name, category }) {
  const[inCart, setInCart]=useState()
  
  const handleAddToCart=()=>{
    setInCart(!inCart)
  }
  const cartClass=inCart? "in-cart":" "

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {inCart? "Remove from Cart" :"Add to Cart"}
        </button>
    </li>
  );
}

export default Item;
