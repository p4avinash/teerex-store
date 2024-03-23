import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"

const ProductCardList = () => {
  const filteredProducts = useSelector((store) => store.app.filteredProducts)

  return (
    <div className='flex gap-6 flex-wrap justify-center'>
      {filteredProducts.map((product) => {
        return <ProductCard product={product} key={product.id} />
      })}
    </div>
  )
}

export default ProductCardList
