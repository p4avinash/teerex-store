import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFiltersType } from "../utils/slices/appSlice"

const Filter = () => {
  const dispatch = useDispatch()

  const filterCategories = useSelector((store) => store.app.filterCategories)

  const handleFilterChange = (e) => {
    dispatch(addFiltersType({ data: e.target.id, status: e.target.checked }))
  }

  return (
    <div className='shadow-xl p-6 flex sm:flex-col gap-2 sm:gap-8 rounded-xl bg-gray-300 w-full sm:w-48'>
      {/* color filter */}
      <div className='color-filter'>
        <h1 className='text-xl font-bold'>Color</h1>
        {filterCategories.color.map((item, index) => {
          return (
            <div className='flex gap-2' key={index}>
              <input
                onChange={(e) => handleFilterChange(e)}
                type='checkbox'
                name='red-color-filter'
                id={`${item}-color-filter`}
              />
              <p className='font-bold capitalize'>{item}</p>
            </div>
          )
        })}
      </div>

      {/* gender filter */}
      <div className='gender-filter'>
        <h1 className='text-xl font-bold'>Gender</h1>
        {filterCategories.gender.map((item, index) => {
          return (
            <div className='flex gap-2' key={index}>
              <input
                onChange={(e) => handleFilterChange(e)}
                type='checkbox'
                name='men-gender-filter'
                id={`${item}-gender-filter`}
              />
              <p className='font-bold capitalize'>{item}</p>
            </div>
          )
        })}
      </div>

      {/* price filter */}
      <div className='price-filter'>
        <h1 className='text-xl font-bold'>Price</h1>
        <div className='flex gap-2'>
          <input
            onChange={(e) => handleFilterChange(e)}
            type='checkbox'
            name='price-filter'
            id='0_250-price-filter'
          />
          <p className='font-bold'>0-250</p>
        </div>
        <div className='flex gap-2'>
          <input
            onChange={(e) => handleFilterChange(e)}
            type='checkbox'
            name='price-filter'
            id='250_350-price-filter'
          />
          <p className='font-bold'>250-350</p>
        </div>
        <div className='flex gap-2'>
          <input
            onChange={(e) => handleFilterChange(e)}
            type='checkbox'
            name='price-filter'
            id='350_450-price-filter'
          />
          <p className='font-bold'>350-450</p>
        </div>
        <div className='flex gap-2'>
          <input
            onChange={(e) => handleFilterChange(e)}
            type='checkbox'
            name='price-filter'
            id='450_1000-price-filter'
          />
          <p className='font-bold'>{`>500`}</p>
        </div>
      </div>

      {/* type filter */}
      <div className='type-filter'>
        <h1 className='text-xl font-bold'>Type</h1>
        {filterCategories.type.map((item, index) => {
          return (
            <div className='flex gap-2' key={index}>
              <input
                onChange={(e) => handleFilterChange(e)}
                type='checkbox'
                name='polo-type-filter'
                id={`${item}-type-filter`}
              />
              <p className='font-bold capitalize'>{item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Filter
