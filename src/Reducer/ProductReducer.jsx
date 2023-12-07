const ProductReducer = (state, action) => {

    switch (action.type) {
        case "API_LOADING":
            return {
                ...state,
                isLoading: true,
            }

        case "GET_API_DATA":
            const feature = action.payload.filter((curElem) => {
                return curElem.featured === true


            })
            console.log("first", feature)
            return {
                ...state,
                isLoading: false,
                Products: action.payload,
                featureProduct: feature,

            }


        case "API_ERROR":
            return {
                ...state,

                isError: true,
            }


        case "SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            }

             case "SET_SINGLE_PRODUCT":
                return{
                    ...state,
                    isSingleLoading:false,
                    SingleProduct: action.payload,
                }

                case "single_Error":
                    return {
                        ...state,
                        isError:true
                    }

        default:
            return state;
    }

}


export default ProductReducer;