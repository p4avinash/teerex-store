import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  addProductToStore,
  addUniqueProductToStore,
  addFilteredProductToStore,
  updateFilteredCategories,
} from "../utils/slices/appSlice"
import ProductCardList from "./ProductCardList"
import Filter from "./Filter"
import Searchbox from "./Searchbox"

const Products = () => {
  const dispatch = useDispatch()

  const getProducts = async () => {
    const response = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
    const products = await response.json()

    const seen = []
    const uniqueProducts = []

    const filterCategories = {}

    const colorArray = []
    const genderArray = []
    const typeArray = []

    products.map((item) => {
      if (!seen.includes(item.name)) {
        seen.push(item.name)
        uniqueProducts.push(item)
      }

      if (!colorArray.includes(item.color.toLowerCase())) {
        colorArray.push(item.color.toLowerCase())
        filterCategories["color"] = colorArray
      }
      if (!genderArray.includes(item.gender.toLowerCase())) {
        genderArray.push(item.gender.toLowerCase())
        filterCategories["gender"] = genderArray
      }
      if (!typeArray.includes(item.type.toLowerCase())) {
        typeArray.push(item.type.toLowerCase())
        filterCategories["type"] = typeArray
      }
    })

    dispatch(addProductToStore(products))
    dispatch(addUniqueProductToStore(uniqueProducts))
    dispatch(addFilteredProductToStore(uniqueProducts))
    dispatch(updateFilteredCategories(filterCategories))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='flex flex-col sm:flex-row'>
      <div className=''>
        <Filter />
      </div>
      <div className='flex flex-col items-center'>
        <Searchbox />
        <ProductCardList />
      </div>
    </div>
  )
}

export default Products
