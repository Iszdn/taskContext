import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { WishlistContext } from "../../Context/WishlistContext";

const ProductsProps = ({
  colButton,
  image,
  category,
  name,
  price,
  brand,
  item,
}) => {
  const [wishlist, setWishlist, addWishlist] = useContext(WishlistContext);

  const handleAddToWishlist = () => {
    addWishlist(item);
  };

  return (
    <div className={`cards col-6 col-lg-4 col-md-4 ${colButton}`}>
      <div className="image-product">
        <img src={image} alt="" />
        <i onClick={handleAddToWishlist} className="fa-regular fa-heart"></i>
      </div>
      <div>
        <h3 className="category-prod">{category}</h3>
        <h3 className="name-prod">{name}</h3>
        <div className="price-prod">${price}</div>
        <p className="brand-prod">{brand}</p>
      </div>
    </div>
  );
};

export default ProductsProps;
