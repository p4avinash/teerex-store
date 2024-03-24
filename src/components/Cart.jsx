import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  removeItemFromCart,
  addItemToCart,
  removeSingleItemFromCart,
} from "../utils/slices/cartSlice"
import toast from "react-hot-toast"

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.cartItems)

  let cartItemsCount = 0
  let totalAmount = 0

  for (const [key, value] of Object.entries(cartItems)) {
    cartItemsCount += value.length
    for (let i = 0; i < value.length; i++) {
      totalAmount += value[i].price
    }
  }

  const handleRemoveItem = (product) => {
    dispatch(removeItemFromCart(product[0].name))
    toast.success("Successfully removed item from cart!")
  }

  const handleUpdateItem = (product, type) => {
    if (type === "increment") {
      if (cartItems[product.name]?.length >= product.quantity) {
        toast.error("Product went out of stock!")
      } else {
        dispatch(addItemToCart(product))
        toast.success("Cart Updated")
      }
    }

    if (type === "decrement") {
      if (cartItems[product.name]?.length === 1) {
        dispatch(removeItemFromCart(product.name))
        toast.success("Successfully removed item from cart!")
      } else {
        dispatch(removeSingleItemFromCart(product))
        toast.success("Cart Updated")
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
                className='flex items-center justify-between border p-2 gap-2 shadow-xl rounded-lg'
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
                <div className='flex gap-3'>
                  <button
                    onClick={() => handleUpdateItem(product[0], "decrement")}
                    className='text-white px-3  flex justify-center items-center rounded-lg bg-cyan-700'
                  >
                    -
                  </button>
                  <p className='bg-white px-3 rounded-lg font-bold text-lg'>
                    {product.length}
                  </p>
                  <button
                    onClick={() => handleUpdateItem(product[0], "increment")}
                    className='text-white px-3 flex justify-center items-center rounded-lg bg-cyan-700'
                  >
                    +
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
      <hr className='mt-6' />
      <div className='totals flex justify-center mt-2'>
        <p className='font-bold mr-4 text-3xl'>Total:</p>
        <p className='text-3xl'>{totalAmount}</p>
      </div>
    </div>
  )
}

export default Cart
