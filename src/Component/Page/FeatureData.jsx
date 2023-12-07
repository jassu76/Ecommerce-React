import React from 'react'

import MainProduct from './MainProduct';
import { MyProductContext } from '../../Context/ProductContext';
const FeatureData = () => {
    
      const {featureProduct, isLoading } = MyProductContext();
      if(isLoading){
        return <div>......................Loading</div>
      }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h1>New</h1>
                        <p>Feature Product</p>
                       <div className='d-flex justify-content-center'>
                        {
                            featureProduct.map((curElem) => {
                                return <MainProduct key={curElem.id} {...curElem} />
                            })
                        }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeatureData