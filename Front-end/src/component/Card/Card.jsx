import { Eye, Heart, ShoppingCart, Trash } from "lucide-react";
import "./Card.css";
export default function Card({
  salePercentage,
  imgSrc,
  prodName,
  finalPrice,
  originalPrice,
  eye,
  heart,
  del,
}) {
  return (
    <div className="cardLayout">
      <div className="cardImg">
        <img src={imgSrc} alt="Product Image" />
      </div>
      <button className="addToCardStyle">
        <ShoppingCart />
        <span>Add To Cart</span>
      </button>
      <div className="productDetailsStyle">
        <span className="prodNameStyle">{prodName}</span>
        <div className="priceHolderLayout">
          <span className="finalPriceStyle">${finalPrice}</span>
          {originalPrice ? (
            <span className="originalPriceStyle">${originalPrice}</span>
          ) : (
            ""
          )}
        </div>
      </div>
      {salePercentage ? (
        <div className="saleStyle">-{salePercentage}%</div>
      ) : (
        ""
      )}
      <div className="operations">
        {heart ? (
          <button className="opIconHolder">
            <Heart />
          </button>
        ) : (
          ""
        )}
        {eye ? (
          <button className="opIconHolder">
            <Eye />
          </button>
        ) : (
          ""
        )}
        {del ? (
          <button className="opIconHolder">
            <Trash />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
