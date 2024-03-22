import "./App.css"
import MainContainer from "./components/MainContainer"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Cart from "./components/Cart"
import React from "react"
import Products from "./components/Products"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
