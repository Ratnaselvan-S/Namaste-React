import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      {cartItems &&
        cartItems.map((item, idx) => {
          return (
            <div className="flex justify-between align-middle my-4 ">
              <h5 key={idx} className="my-auto">
                {item?.card?.info?.name}
              </h5>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
