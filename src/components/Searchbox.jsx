import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFilteredProductToStore } from "../utils/slices/appSlice"

const Searchbox = () => {
  const dispatch = useDispatch()
  const searchRef = useRef()
  const uniqueProducts = useSelector((store) => store.app.uniqueProducts)

  const handleSearch = () => {
    const filteredProducts = uniqueProducts.filter((item) => {
      if (
        item.name
          .toLowerCase()
          .includes(searchRef.current.value.toLowerCase()) ||
        item.type
          .toLowerCase()
          .includes(searchRef.current.value.toLowerCase()) ||
        item.gender
          .toLowerCase()
          .includes(searchRef.current.value.toLowerCase())
      ) {
        return item
      }
    })

    dispatch(addFilteredProductToStore(filteredProducts))
  }

  return (
    <div className='m-6'>
      <input
        onChange={handleSearch}
        ref={searchRef}
        type='text'
        placeholder='Search for products'
        className='bg-gray-300 p-3 rounded-l-lg outline-none search-button-container'
      />
      <button
        onClick={handleSearch}
        className='bg-black text-white p-3 rounded-r-lg'
      >
        Search
      </button>
    </div>
  )
}

export default Searchbox
