import React, { useContext } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../../components/Context/ContextProvider";
import BasketItem from "./BasketItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";

export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>Shopping cart</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            Products page
          </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title">
              <img src="images/sound(1).jpg" alt="" />
              <span>
               The shipping cost for purchases over 5000 is free
              </span>
            </div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <OfferBadge />
            <div className="basket_price">
              <span>Total shopping cart</span>
              <span>|</span>
              <span>Price {state.totalPrice.toLocaleString()}</span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>Discounted price</span>
                <span>price {state.totalPriceAfterOffer.toLocaleString()} </span>
              </div>
            )}
            <Offer />
            <SendProducts />
            <div className="basket_send">
              <span>Total amount payable</span>
              <span>Cost:{state.totalPriceFainal.toLocaleString()}</span>
            </div>
            <button className="basket_button_buy">Continue buying process</button>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
             Remove from the basket
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title">The shopping cart is empty</span>
        </div>
      )}
    </>
  );
}
