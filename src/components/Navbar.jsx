import React from "react"
import { BsCart } from "react-icons/bs"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4 items-center shadow-xl mb-6 bg-white'>
      <div>
        <Link to={"/"} className='text-2xl'>
          TeeRex Store
        </Link>
      </div>
      <div>
        <ul className='flex gap-10'>
          <li className='text-xl'>
            <Link to={"/"}>Products</Link>
          </li>
          <li className='text-3xl'>
            <Link to={"/cart"}>
              <BsCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
