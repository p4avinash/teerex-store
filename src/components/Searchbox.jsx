import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addFilteredProductToStore,
  toggleShowFilter,
} from "../utils/slices/appSlice"
import { BiFilterAlt } from "react-icons/bi"

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

  const handleShowFilters = () => {
    dispatch(toggleShowFilter())
  }

  return (
    <div className='m-6 flex'>
      <input
        onChange={handleSearch}
        ref={searchRef}
        type='text'
        placeholder='Search for products'
        className='bg-gray-300 p-3 rounded-l-lg outline-none'
      />
      <button
        onClick={handleSearch}
        className='bg-black text-white p-3 rounded-r-lg search-button-container'
      >
        Search
      </button>
      <button
        onClick={handleShowFilters}
        className='bg-black text-white p-4 rounded-lg ml-1 filter sm:hidden'
      >
        <BiFilterAlt />
      </button>
    </div>
  )
}

export default Searchbox
