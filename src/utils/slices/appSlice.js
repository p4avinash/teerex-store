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
      function isPriceInRange(price, filters) {
        let isValid = false
        for (let i = 0; i < filters.length; i++) {
          const minRange = filters[i].split("_")[0]
          const maxRange = filters[i].split("_")[1]

          if (price >= minRange && price <= maxRange) {
            isValid = true
            break
          }
        }
        return isValid
      }

      const filteredData = state.uniqueProducts.filter((item) => {
        let filterObjKeys = Object.keys(state.filters)
        let isPresent = true
        for (const filterKey in state.filters) {
          if (Object.hasOwnProperty.call(state.filters, filterKey)) {
            const filters = state.filters[filterKey]
            if (filterKey == "price") {
              if (!isPriceInRange(item.price, filters)) {
                isPresent = false
                break
              }
            } else if (!filters.includes(item[filterKey].toLowerCase())) {
              isPresent = false
              break
            }
          }
        }

        if (isPresent) {
          return item
        }
      })

      state.filteredProducts = filteredData
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
