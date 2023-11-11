import { RouterProvider, createBrowserRouter } from "react-router-dom"

// pages
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import RootLayout from "./layout/RootLayout"
import CountriesList from "./components/CountriesList"

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
      ]
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App