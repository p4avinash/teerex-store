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
    <div className='shadow-xl p-6 flex justify-center sm:flex-col gap-2 sm:gap-8 rounded-xl bg-gray-300 w-full sm:w-48'>
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
              <label
                htmlFor={`${item}-color-filter`}
                className={`font-bold capitalize ${item}`}
              >
                {item}
              </label>
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
              <label
                htmlFor={`${item}-color-filter`}
                className={`font-bold capitalize ${item}`}
              >
                {item}
              </label>
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
          <label htmlFor='0_250-price-filter' className='0-250 font-bold'>
            0-250
          </label>
        </div>
        <div className='flex gap-2'>
          <input
            onChange={(e) => handleFilterChange(e)}
            type='checkbox'
            name='price-filter'
            id='250_350-price-filter'
          />
          <label htmlFor='250_350-price-filter' className='250-350 font-bold'>
            250-350
          </label>
        </div>
        <div className='flex gap-2'>
          <input
            onChange={(e) => handleFilterChange(e)}
            type='checkbox'
            name='price-filter'
            id='350_450-price-filter'
          />
          <label htmlFor='350_450-price-filter' className='350-450 font-bold'>
            350-450
          </label>
        </div>
        <div className='flex gap-2'>
          <input
            onChange={(e) => handleFilterChange(e)}
            type='checkbox'
            name='price-filter'
            id='450_1000-price-filter'
          />
          <label htmlFor='450_1000-price-filter' className='500-1000 font-bold'>
            500-1000
          </label>
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
              <label
                htmlFor={`${item}-color-filter`}
                className={`font-bold capitalize ${item}`}
              >
                {item}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Filter
