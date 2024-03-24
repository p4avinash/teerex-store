import React from "react"
import { BsCart } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.cartItems)
  let cartItemsCount = 0

  for (const [key, value] of Object.entries(cartItems)) {
    cartItemsCount += value.length
  }

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
          <li className='text-3xl relative'>
            <Link to={"/cart"}>
              <p className='absolute text-sm -right-3 -top-3 bg-cyan-700 text-white px-1 rounded-full'>
                {cartItemsCount}
              </p>
              <BsCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
