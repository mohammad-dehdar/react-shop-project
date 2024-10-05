import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import DetailsPage from "./Pages/DetailsPage"
import Checkout from "./Pages/Checkout"
import NotFound from "./404"

import ProductProvider from "./context/ProductProvider"
import CartProvider from "./context/CartContext"
import Layout from "./layout/Layout"


function App() {

  return (
    <CartProvider>
      <ProductProvider>
        <Layout>
          <Routes>
            <Route index element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/chekout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ProductProvider>
    </CartProvider>

  )
}

export default App
