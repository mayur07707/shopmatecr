import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useEffect } from "react";

export const ProductCard = ({product}) => {
  const {id, name, price, image} = product;
  const {cartList, addToCart, removeFromCart} = useCart();

  const [isInCart, setisInCart] = useState(false);

  useEffect(()=>{
    const productisInCartList = cartList.find((element)=> element.id === id)

      if(productisInCartList){
          setisInCart(true);
      } else {
        setisInCart(false);
      }
     },[cartList, id])

  function handleAdd (){
    addToCart(product);
    //console.log(cartList);
  }

  function handleRemove (){
    removeFromCart(product);
  }

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
          {isInCart ? <button className="remove" onClick={handleRemove}>Remove</button> :<button onClick={handleAdd}>Add To Cart</button>} 
      </div>
    </div>
  )
}