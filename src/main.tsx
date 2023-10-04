import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutsMain from './Componentes/Layouts/LayoutMain.tsx'
import { Cart } from './paginas/Cart/Cart.tsx'
import Home from './paginas/Home/Home.tsx'

const router = createBrowserRouter([
  {
  path: "/" , 
  element : <LayoutsMain /> ,
  children : [
    { index : true , element: <Home /> },
    { path : "/cart" , element : <Cart /> }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */ }
    <RouterProvider router= {router}>

    </RouterProvider>
  </React.StrictMode>,
)
