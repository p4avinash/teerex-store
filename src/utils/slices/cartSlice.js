import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
    totalCartItem: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      if (state.cartItems.hasOwnProperty(action.payload.name)) {
        state.cartItems[action.payload.name].push(action.payload)
      } else {
        state.cartItems[action.payload.name] = []
        state.cartItems[action.payload.name].push(action.payload)
      }
    },

    removeItemFromCart: (state, action) => {
      let newUpdatedObject = JSON.stringify(state.cartItems)
      newUpdatedObject = JSON.parse(newUpdatedObject)
      delete newUpdatedObject[action.payload]
      state.cartItems = newUpdatedObject
    },

    removeSingleItemFromCart: (state, action) => {
      state.cartItems[action.payload.name].pop()
    },
  },
})

export const { addItemToCart, removeItemFromCart, removeSingleItemFromCart } =
  cartSlice.actions
export default cartSlice.reducer
