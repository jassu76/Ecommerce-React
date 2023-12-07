


const FilterReducer = (state, action) => {

    switch (action.type) {



        case "FILTER_ALL_PRODUCT":
            return {
                ...state,

                filterProduct: [...action.payload],
                allfilterproduct: [...action.payload],
            }


        case "UPDATE_FILTER":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,

                },

            }


        case "FILTER_PRODUCT":
            let { allfilterproduct } = state;
            console.log("allfilterproduct", allfilterproduct)
            let tempFilterProduct = [...allfilterproduct]
            console.log("🚀 ~ file: FilterReducer.jsx:36 ~ FilterReducer ~ tempFilterProduct:", tempFilterProduct)
            const { category } = state.filters;

            if (category !== "All") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category === category;
                })
            }


            return {
                ...state,
                filterProduct: tempFilterProduct,
            }

        default:
            return state




    }




}

export default FilterReducer