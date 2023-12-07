import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from '../Reducer/FilterReducer'
import { MyProductContext } from "./ProductContext";
import { useEffect } from "react";


const FilterContext = createContext();

const initialState = {
    filterProduct: [],
    allfilterproduct: [],
    isLoading: false,
    filters: {
        category: "All",
        
    },
}

const FilterProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);

    const { Products } = MyProductContext();
    



    // filter category product

    const UpdateCategoryProduct = (event) => {
        let name = event.target.name;
        let value = event.target.value;

       return dispatch({ type: "UPDATE_FILTER", payload: { name, value } })

    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCT" })
    }, [state.filters])

    useEffect(() => {
               dispatch({ type: "FILTER_ALL_PRODUCT", payload: Products })
    }, [Products])


    return <FilterContext.Provider value={{ ...state, UpdateCategoryProduct }}>{children}</FilterContext.Provider>
}



const MyFilterContext = () => {
    return useContext(FilterContext)
}


export { FilterProvider, FilterContext, MyFilterContext }