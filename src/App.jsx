import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Category } from './pages/Category'
import { CartProvider } from './state/Cart.context'
import { CartDetail } from './pages/CartDetail'
import { Footer } from './components/Footer'


const Root = () => {
  return (<>
    <NavBar />
    <Footer />
  </>
  )
}

const routes = createBrowserRouter(createRoutesFromElements
  (
    // <Route element={<NavBar /> } >
    <Route element= {< Root />}>
      <Route path="/" element={< Home />} />
      <Route path="/item/:id" element={<Detail />} />
      <Route path="/category/:id" element={< Category />} />
      <Route path="/cart/" element={< CartDetail />} />

    </Route >

  ));

function App() {

  return (
   <div id="wrapper">
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </div>
  )
} {/*  QUITAMOS ITEMLISTCOMPONENT Y MOVEMOS A NUEVO COMPONENTE HOME */ }
export default App


