import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Context/ProductContext.jsx'
import { FilterProvider } from './Context/FilterContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Auth0Provider
      domain="dev-zslikwookx28g2bo.us.auth0.com"
      clientId="wJpZOhPsVLlP2waj7UVyFOxsGxjyGcc9"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <AppProvider>
          <FilterProvider>
            <CartProvider>

              <App />

            </CartProvider>
          </FilterProvider>
        </AppProvider>
      </BrowserRouter>
    </Auth0Provider>
  </>,
)
