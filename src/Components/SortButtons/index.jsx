import React from 'react'
import "./index.css"
function SortButton({setColButton}) {
  return (
    <>
    <button className='sort-btn' onClick={()=>setColButton("col-lg-12 col-12 col-md-12")}>:</button>
    <button className='sort-btn' onClick={()=>setColButton("col-lg-6 col-md-6 col-6")}>::</button>
    <button className='sort-btn' onClick={()=>setColButton("col-lg-4 col-md-6 col-6")}>:::</button>
        </>
  )
}

export default SortButton