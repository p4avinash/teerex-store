import React from "react"

const ProductCard = ({ product }) => {
  const { imageURL, name, price, currency } = product
  return (
    <div className='card relative shadow-xl bg-gray-300 rounded-lg px-4 pt-10'>
      <div className='photo w-52'>
        <img src={imageURL} alt={name} />
      </div>
      <p className='absolute top-2 font-bold'>{name}</p>
      <div className='flex justify-between py-6 items-center'>
        <p className='font-bold'>{`${currency} ${price}`}</p>
        <button className='bg-black text-white px-4 py-2 absolute right-0 rounded-l-lg'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
