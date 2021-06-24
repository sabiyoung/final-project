import React, { useState } from "react";
import { useStateValue } from "../stateProvider/StateProvider";
import SubTotal from "../subTotal/SubTotal";
import "./checkout.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Checkout() {
  const [{ cart, quantity }, dispatch] = useStateValue();
  // const [items, setItems] = useState(1);
  console.log("cart", cart);
  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          {cart.map((item) => (
            <div className="checkoutProduct">
              <img className="checkoutProduct__image" src={item.image} />

              <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title}</p>
                <p className="checkoutProduct__price">
                  <small>$</small>
                  <strong>{item.price}</strong>
                </p>

                <div className="quantity">
                  <label htmlFor="qty">Qty</label>
                  <input
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                    // value={}
                  ></input>
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
