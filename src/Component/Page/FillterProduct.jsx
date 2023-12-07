import React from 'react'
import { MyFilterContext } from '../../Context/FilterContext';
import { useState } from 'react';
import { useEffect } from 'react';
const FillterProduct = () => {
//     const { filters: { category }, allfilterproduct, UpdateCategoryProduct } = MyFilterContext();
//     console.log("allfilterproduct", allfilterproduct)

//       const [cat, setCat]= useState([])
    
//     const getProductCategor = (Data, property) => {
//         let newValue = Data.map((curElem) => {
//             return curElem[property]
//         })

//         newValue = ["ALL", ...new Set(newValue)]
        
//         setCat(newValue)
//         console.log("newValue", newValue)
//     }

//   // we need unique data
          
//   useEffect(()=>{
//     getProductCategor(allfilterproduct, "category");
//   },[])

//     // const categoryonlyProduct = getProductCategor(allfilterproduct, "category");
//     // console.log("categoryProduct", categoryonlyProduct)

    return (
        <div>
            
                   {/* {
                    cat.map((curElem, index)=>{
                        console.log("curElem",curElem)
                         return(
                            <button key={index} 
                            type="submit"
                            name="category"
                            value={curElem}
                             onClick={UpdateCategoryProduct}  >
                              {curElem}
                            </button>
                         )
                    })
                   } */}
           


        
        </div>
    )
}

export default FillterProduct