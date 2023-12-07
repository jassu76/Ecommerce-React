import { useReducer } from "react";
import { createContext } from "react";
import reducer from '../Reducer/ProductReducer'
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";


const API = "https://api.pujakaitem.com/api/products"

const AppContext = createContext();

const intialState ={
    isLoading:false,
    isError: false,
    Products:[],
    featureProduct:[],
    isSingleLoading:false,
    SingleProduct:{},

}

const AppProvider = ({children})=>{
  const [state, dispatch] = useReducer(reducer, intialState)

  const getProduct = async (url)=>{
     dispatch({type:"API_LOADING"})
     try {
         const res = await axios.get(url);
         const product = await res.data;
         console.log("🚀 ~ file: ProductContext.jsx:26 ~ getProduct ~ product̥:", product)
         dispatch({ type: "GET_API_DATA", payload: product })
     } catch (error) {
         dispatch({type: "API_ERROR"})
     }
  }
   


  const singleDataProduct = async(url)=>{
    dispatch({type: "SINGLE_LOADING"})
       try {
                const res = await axios.get(url);
                const singleProductData = await res.data;
                    console.log("singleProductData", singleProductData)
                    dispatch({type:"SET_SINGLE_PRODUCT", payload:singleProductData})
       } catch (error) {
         dispatch ({type: "single_Error"})
       }
  }



  useEffect(()=>{
    getProduct(API)
  },[])


      return <AppContext.Provider value={{...state, singleDataProduct}}>{children}</AppContext.Provider>
}

//  custom <Hook></Hook>

const MyProductContext=()=>{
  return useContext(AppContext)
}

export {AppProvider,MyProductContext, AppContext}