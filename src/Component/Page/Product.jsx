import React from 'react'
import FillterProduct from './FillterProduct'
import ProductList from './ProductList'
const Product = () => {
  return (
    <div>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                    <FillterProduct />
              </div>
              <div className="col-md-9">
                  <ProductList />
              </div>
            </div>
          </div>
        
    </div>
  )
}

export default Product