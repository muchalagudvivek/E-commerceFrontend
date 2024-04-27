import React, {useContext} from "react";
import AddressCard from "../AddressCard/AddressCard";
import { ShopContext } from "../../Context/ShopContext";
import '../CartItems/CartItems.css';
import { useNavigate } from "react-router-dom";

const OrderSummary=()=>{

    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    
    const navigate = useNavigate();
    const handleOrder = () => {
      navigate("/order")
    }
    return(
        <div>
            <div className="p-5 shadow-lg rounded-s-md border">
            
            <div className="cartitems">
            <AddressCard />
            <br />
            <hr />
                <div className="cartitems-format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p></p>
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
                        </div>
                        <hr />
                    </div>;
                    }
                    return null;
                })}

                <div className="cartitems-down">
                    <div className="cartitems-total">
                    <h1 style={{fontWeight: '600', fontSize: '18px'}}>Order Details</h1>
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
                        <h3 style={{fontWeight: '600'}}>&#8377; {getTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleOrder}
                        className="rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Order Now
                    </button>

                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default OrderSummary;