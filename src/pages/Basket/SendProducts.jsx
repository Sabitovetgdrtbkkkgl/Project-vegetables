import React, { useContext } from "react";
import { sendPrice } from "../../data/Offer";
import { ProductContext } from "../../components/Context/ContextProvider";

export default function SendProducts() {
  const { state } = useContext(ProductContext);

  return (
    <div className="send_products">
      <div className="send_info_price">
        <span>
          {state.totalPrice - state.offerPrice < 5000
            ? `Shipping cost ${sendPrice.toLocaleString()}`
            : "Free"}
        </span>
      </div>
      {state.totalPrice - state.offerPrice > 5000 && (
        <div className="send_free_img">
          <img src="images/free.svg" alt="free" />
        </div>
      )}
    </div>
  );
}
