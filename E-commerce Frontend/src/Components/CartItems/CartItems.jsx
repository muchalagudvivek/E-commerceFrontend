import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  //const {products} = useContext(ShopContext); 
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, getTotalCartItems } = useContext(ShopContext);

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/ordersummary")
  }

  return (
  <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e, key) => {
        if (cartItems[e.id] > 0) {
          return <div key={key}>
            <div className="cartitems-format-main cartitems-format">
              <img className="cartitems-product-icon" src={e.image} alt="" />
              <p cartitems-product-title>{e.name}</p>
              <p>&#8377; {e.new_price}</p>
              <button className="cartitems-quantity">{cartItems[e.id]}</button>
              <p>&#8377; {e.new_price * cartItems[e.id]}</p>
              <img onClick={() => { removeFromCart(e.id) }} className="cartitems-remove-icon" src={cross_icon} alt="" />
            </div>
            <hr />
          </div>;
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>&#8377; {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>&#8377; {getTotalCartAmount()}</h3>
            </div>
          </div>

          <Button disabled={getTotalCartItems() <= 0 ? true: false} onClick={handleCheckout}>PROCEED TO CHECKOUT</Button>

        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
