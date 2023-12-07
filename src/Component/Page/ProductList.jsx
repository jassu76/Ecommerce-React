import React from 'react'
import { MyFilterContext } from '../../Context/FilterContext'
import MainProduct from './MainProduct';

const ProductList = () => {
    const {filterProduct}= MyFilterContext();
    console.log("filterProduct", filterProduct)
    
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex flex-wrap">
                    {filterProduct.map((curElem, index)=>{
                        return <MainProduct key={index} {...curElem} />
                    })

                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList