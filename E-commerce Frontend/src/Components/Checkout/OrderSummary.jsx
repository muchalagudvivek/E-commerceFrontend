import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItems from "../CartItems/CartItems";

const OrderSummary=()=>{
    return(
        <div>
            <div className="p-5 shadow-lg rounded-s-md border">
            <AddressCard />
            </div>
  

        </div>
    )
}
export default OrderSummary;