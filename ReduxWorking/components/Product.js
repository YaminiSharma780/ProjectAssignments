import { useDispatch } from "react-redux";
import wishListIcon from "../assets/wish-list-icon.svg";
import { wishListAddItem } from "../store/reducers/wishlistReducer";
import { cartAddItem } from "../store/reducers/cartReducer";

export default function Product({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div>
        <button
          onClick={() => {
            dispatch(wishListAddItem(productId));
          }}
          className="wish-button"
        >
          <img className="wish-list-icon" src={wishListIcon} alt="wish-icon" />
        </button>
      </div>
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button
          onClick={() => {
            dispatch(cartAddItem(productId));
          }}
        >
          Add to Cart
        </button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}
