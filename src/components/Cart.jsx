import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  removeItemFromCart,
  addItemToCart,
  removeSingleItemFromCart,
} from "../utils/slices/cartSlice"
import { CgMathMinus, CgMathPlus } from "react-icons/cg"

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.cartItems)

  let cartItemsCount = 0

  for (const [key, value] of Object.entries(cartItems)) {
    cartItemsCount += value.length
  }

  const handleRemoveItem = (product) => {
    dispatch(removeItemFromCart(product[0].name))
  }

  const handleUpdateItem = (product, type) => {
    console.log("update cart item", product, type)
    if (type === "increment") {
      if (cartItems[product.name]?.length >= product.quantity) {
        alert("Product not in stock")
      } else {
        dispatch(addItemToCart(product))
      }
    }

    if (type === "decrement") {
      if (cartItems[product.name]?.length === 1) {
        dispatch(removeItemFromCart(product.name))
      } else {
        dispatch(removeSingleItemFromCart(product))
      }
    }
  }

  if (cartItemsCount === 0) {
    return (
      <h1 className='text-3xl font-bold flex justify-center mt-52'>
        Cart Empty...!!
      </h1>
    )
  }

  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold'>Shopping Cart</h1>
      <div className='cart-items mt-8'>
        <div className='item p-2 flex flex-col gap-6'>
          {Object.values(cartItems).map((product) => {
            return (
              <div
                key={product[0].id}
                className='flex items-center justify-between border p-2 shadow-xl rounded-lg'
              >
                <div className='flex items-center'>
                  <img
                    className='w-20 rounded-lg'
                    src={product[0].imageURL}
                    alt={product[0].name}
                  />
                  <div className='ml-4 font-bold'>
                    <p>{product[0].name}</p>
                    <p>
                      {product[0].price} {product[0].currency}
                    </p>
                  </div>
                </div>
                <div className='absolute right-28 sm:right-80 flex gap-3'>
                  <button
                    onClick={() => handleUpdateItem(product[0], "decrement")}
                    className='text-white px-3  flex justify-center items-center rounded-lg bg-cyan-700'
                  >
                    <CgMathMinus />
                  </button>
                  <p className='bg-white px-3 rounded-lg font-bold text-lg'>
                    {product.length}
                  </p>
                  <button
                    onClick={() => handleUpdateItem(product[0], "increment")}
                    className='text-white px-3 flex justify-center items-center rounded-lg bg-cyan-700'
                  >
                    <CgMathPlus />
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleRemoveItem(product)}
                    className='bg-red-600 p-2 rounded-lg text-white'
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
