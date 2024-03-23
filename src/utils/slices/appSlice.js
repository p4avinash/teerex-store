import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: {
    allProducts: [],
    uniqueProducts: [],
    searchQuery: "",
    filteredProducts: [],
    filters: {},
    filterCategories: {
      color: [],
      gender: [],
      type: [],
    },
  },
  reducers: {
    addProductToStore: (state, action) => {
      state.allProducts = action.payload
    },

    addUniqueProductToStore: (state, action) => {
      state.uniqueProducts = action.payload
    },

    addFilteredProductToStore: (state, action) => {
      state.filteredProducts = action.payload
    },

    updateFilteredCategories: (state, action) => {
      state.filterCategories = action.payload
    },

    updatePriceFilter: (state, action) => {
      state.priceFilterAmount = action.payload
      state.filteredProducts = state.uniqueProducts.filter(
        (item) => item.price <= Number(action.payload)
      )
    },

    addFiltersType: (state, action) => {
      const { data, status } = action.payload
      //getting filter data
      const filterType = data.split("-")[1]
      const filterValue = data.split("-")[0]

      //setting filters in store
      if (status === true) {
        //add filters
        if (state.filters.hasOwnProperty(filterType)) {
          state.filters[filterType].push(filterValue)
        } else {
          state.filters[filterType] = []
          state.filters[filterType].push(filterValue)
        }
      } else {
        //remove filters
        if (state.filters[filterType].length > 1) {
          const filterArray = state.filters[filterType].filter(
            (item) => item !== filterValue
          )
          state.filters[filterType] = filterArray
        } else {
          let newFilterObject = JSON.stringify(state.filters)
          newFilterObject = JSON.parse(newFilterObject)
          delete newFilterObject[filterType]
          state.filters = newFilterObject
        }
      }

      //filter products

      // const filteredProducts = state.uniqueProducts.filter((item) => {
      //   let filterObjKeys = Object.keys(state.filters)
      //   let isPresent = true

      //   for (let i = 0; i < filterObjKeys.length; i++) {
      //     let filterKey = filterObjKeys[i]
      //     if (
      //       !state.filters[filterKey].includes(item[filterKey].toLowerCase())
      //     ) {
      //       isPresent = false
      //       break
      //     }
      //   }

      //   if (isPresent) {
      //     return item
      //   }
      // })

      // state.filteredProducts = filteredProducts

      const filteredProducts = state.uniqueProducts.filter((item) => {
        let filterObjKeys = Object.keys(state.filters)
        let isPresent = true

        for (let i = 0; i < filterObjKeys.length; i++) {
          let filterKey = filterObjKeys[i]
          if (filterKey !== "price") {
            if (
              !state.filters[filterKey].includes(item[filterKey].toLowerCase())
            ) {
              isPresent = false
              break
            }
          } else {
            const priceRangeArray = state.filters[filterKey]
            for (let i = 0; i < priceRangeArray.length; i++) {
              console.log(priceRangeArray[i])
              const startRange = priceRangeArray[i].split("_")[0]
              const endRange = priceRangeArray[i].split("_")[1]

              if (
                !(
                  item.price >= Number(startRange) &&
                  item.price <= Number(endRange)
                )
              ) {
                isPresent = false
                break
              }
            }
          }
        }
        if (isPresent) {
          return item
        }
      })

      state.filteredProducts = filteredProducts
    },
  },
})

export const {
  addProductToStore,
  addUniqueProductToStore,
  addFilteredProductToStore,
  addFiltersType,
  updatePriceFilter,
  updateFilteredCategories,
} = appSlice.actions
export default appSlice.reducer
