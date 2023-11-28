import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useEffect, useMemo, useState } from "react";
import ProductsProps from "../ProductsProps";
import "./index.css";
import SortButton from "../SortButtons";
import { WishlistContext } from "../../Context/WishlistContext";

function Products() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const [colButton, setColButton] = useState(false);
  const [sort, setSort] = useState("All");

  function datalar() {
    fetch("http://localhost:3000/nuraproducts")
      .then((res) => res.json())
      .then((items) => setData(items));
  }
  useEffect(() => {
    datalar();
  }, []);

  // filter
  // const applyFilters = (item) => {
  //   console.log(item);
  //   console.log(filters);
  //   return (
  //     (filters.category.length === 0 || filters.category.includes(item.category)) &&
  //     (filters.size.length === 0 || filters.size.includes(item.size)) &&
  //     (filters.color.length === 0 || filters.color.includes(item.color)) &&
  //     (filters.brand.length === 0 || filters.brand.includes(item.brand))
  //   );
  // };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
    pageNumbers.push(i);
  }

  const lastElementIndex = perPage * currentPage;
  const firstElementIndex = lastElementIndex - perPage;
  const PageDatas = useMemo(
    () => data.slice(firstElementIndex, lastElementIndex),
    [data, currentPage]
  );

  const handleSortSelect = (e) => setSort(e.target.value);
  return (
    <>
      <div className="container">
        <div className="row products">
          <div className="show">
            <span className="s9">
              Showing <span className="s56">9 of 56</span> Products
            </span>
            <div className="sort-by">
              <label className="lab" htmlFor="">
                sort by:
              </label>
              <select value={sort} onChange={handleSortSelect}>
                <option value="All">All</option>
                <option value="5">Most Popular</option>
                <option value="1">Not Popular</option>
              </select>
              <SortButton setColButton={setColButton}></SortButton>
            </div>
          </div>

          {PageDatas &&
            PageDatas.filter(
              (item) => sort === "All" || item.rate === parseFloat(sort)
            ).map((x) => (
              <ProductsProps
                key={x.id}
                colButton={colButton}
                image={x.image}
                {...x}
                item={x}
                category={x.category}
                name={x.name}
                price={x.price}
                brand={x.brand}
              />
            ))}
        </div>
      </div>
      <div className="pagination">
        {pageNumbers.map((page) => (
          <button
            className="page-btn"
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
}

export default Products;
