import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  function addWishlist(item) {
    const itemIndex = wishlist.findIndex((x) => x.id === item.id);
    if (itemIndex === -1) {
      setWishlist([...wishlist, { ...item, count: 1 }]);
    }
    wishlist[itemIndex].count++;
    setWishlist([...wishlist]);
  }
  return (
    <WishlistContext.Provider value={[wishlist, setWishlist, addWishlist]}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
