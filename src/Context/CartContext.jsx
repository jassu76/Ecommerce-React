import { useReducer } from "react";
import { createContext, useContext } from "react";
import reducer from '../Reducer/CartReducer'
import { useEffect } from "react";






const Cartcontext = createContext();
// const getDataLocal =()=>{
//     let Local = sessionStorage.getItem("Data");
//     if(Local == []){
//         return []
//     } else{
//         return JSON.parse(Local)
//     }
// }
 const initialState={
    Cart:[],
    // Cart:getDataLocal(),
    total_item:"",
    total_price:"",
    shooping_fee: 5000,
 }

const CartProvider = ({ children }) => {

    const [state, dispatch]=  useReducer(reducer, initialState)
   

    const addCart = (id,color,amount,product)=>{
        dispatch({type:"ADD_TO_CART", payload: {id,color,amount,product}})
    }

  const setIncrease =(id)=>{
      dispatch({type:"INCREASE", payload:id})
  }

  const setDecrease =(id)=>{
    dispatch({type:"Decrease", payload:id})
  }

  const removeItem =(id)=>{
         dispatch({type:"removeItem", payload:id})
  }

  const Allclear =()=>{
    dispatch({type: "Allclear"})
  }


  useEffect(()=>{
    dispatch({type:"CART_TOTAL_PRICE"})
    dispatch({type:"CART_TOTAL_ITEM"})
    sessionStorage.setItem("Data", JSON.stringify(state.Cart))
  },[state.Cart])


    return (
        <Cartcontext.Provider value={{...state,addCart,setIncrease,setDecrease,removeItem,Allclear}} >
            {children}
        </Cartcontext.Provider>
    )
}




const useCartcontext = () => {
    return useContext(Cartcontext)
}

export { CartProvider, useCartcontext }