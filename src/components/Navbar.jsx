import React from "react"
import { BsCart } from "react-icons/bs"

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4'>
      <div>Logo</div>
      <div>
        <ul className='flex gap-6'>
          <li>Products</li>
          <li>
            <BsCart />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
