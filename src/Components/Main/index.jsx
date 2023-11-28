import React, { useState } from 'react'
import Products from '../PtoductsFetch'
import "./index.css"

function Main() {
const [isOpenCategory, setIsOpenCategory] = useState(false)
const [isOpenSize, setIsOpenSize] = useState(false)
const [isOpenColour, setIsOpenColour] = useState(false)
const [isOpenBrand, setIsOpenBrand] = useState(false)
const [isOpenPrice, setIsOpenPrice] = useState(false)



const toggleOpenCategory=()=>{
  setIsOpenCategory(!isOpenCategory)
}
const toggleOpenSize=()=>{
  setIsOpenSize(!isOpenSize)
}
const toggleOpenColour=()=>{
  setIsOpenColour(!isOpenColour)
}

const toggleOpenBrand=()=>{
  setIsOpenBrand(!isOpenBrand)
}
const toggleOpenPrice=()=>{
  setIsOpenPrice(!isOpenPrice)
}
  return (
    <div id='main'>
<div className="container">
    <div className="row">
            <div className="aside col-lg-3 ">

              <div className="sidebar">
                {/* widget start */}
                <div className="widget-clean">
                  <label htmlFor="">Filters:</label>
                  <a className='clean' href="">Clean All</a>
                </div>
                {/* widget end*/}
<ul className='filters'>
  <li ><span className='fil-text' onClick={toggleOpenCategory} >Category</span>
    <ul className={`category-filter ${isOpenCategory ? "open" : ""}`}>
      <li ><input value="dresses" type="checkbox" />Dresses</li>
      <li  ><input value="skirts" type="checkbox" />Skirts</li>
      <li ><input value="shoes" type="checkbox" />Shoes</li>
      <li ><input value="bags" type="checkbox" />Bags</li>
      <li ><input value="jackets" type="checkbox" />Jackets</li>
      <li ><input value="jeans" type="checkbox" />Jeans</li>
      <li ><input value="jumpers" type="checkbox" />Jumpers</li>
    </ul>
  </li>
  <li > <span className='fil-text' onClick={toggleOpenSize} >Size</span>
  <ul className={`size-filter ${isOpenSize ? "open-size" : ""}`}>
      <li ><input value="xs" type="checkbox" />xs</li>
      <li ><input value="s" type="checkbox" />s</li>
      <li ><input value="m" type="checkbox" />m</li>
      <li ><input value="l" type="checkbox" />l</li>
      <li ><input value="xl" type="checkbox" />xl</li>
    </ul>
  </li>
  <li><span className='fil-text' onClick={toggleOpenColour} >Colour</span>
    <div className={`colour-filter ${isOpenColour ? "open-colour" : ""}`}>
      <div  value="blue" className='blue color'></div>
      <div  value="green" className='green color'></div>
      <div  value="yellow" className='yellow color'></div>
      <div   value="orange" className='orange color'></div>
      <div  value="white" className='white color'></div>
      <div  value="brown" className='brown color'></div>
      <div  value="beage" className='beage color'></div>
      <div  value="black" className='black color'></div>
      <div></div>
    </div>
  </li>
  <li ><span className='fil-text' onClick={toggleOpenBrand} >Brand</span>
    <ul className={`brand-filter ${isOpenBrand ? "open-brand" : ""}`}>
    <li ><input value="zara" type="checkbox" />zara</li>
      <li ><input value="berska" type="checkbox" />berska</li>
      <li><input value="mango" type="checkbox" />mango</li>
      <li><input value="DeFacto" type="checkbox" />DeFacto</li>
      <li><input value="pull&bear" type="checkbox" />pull & bear</li>
    </ul>
  </li>
  <li ><span className='fil-text' onClick={toggleOpenPrice} >Price</span>
    <div  className={`price-filter sort-buttons ${isOpenPrice ? "open-price" : ""}`}>
    <button className='sort-asc'>Sort by ascending price</button>
    <button className='sort-des'>Sort by descending  price</button></div>
  </li>
</ul>
              </div>
            </div>
            <div className="col-lg-9 product"> <Products /></div>
    </div>
</div>
    </div>
  )
}

export default Main