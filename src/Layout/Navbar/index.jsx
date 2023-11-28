import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
function Navbar() {
  return (
    <div className='navbar'>
        <div></div>
        <ul className='nav'>
            <li>
                <Link className='a' to='/wishlist'>wishlist</Link>
            </li>
            <li>about us</li>
            <li>contact us</li>
            <li>login</li>
        </ul>
    </div>
  )
}

export default Navbar