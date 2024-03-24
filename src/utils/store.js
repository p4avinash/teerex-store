import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./slices/appSlice"
import cartSlice from "./slices/cartSlice"

const store = configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
  },
})

export default store
