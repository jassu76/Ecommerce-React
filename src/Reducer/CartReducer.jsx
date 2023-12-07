


const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let { id, color, amount, product } = action.payload;

            let exitItem = state.Cart.find((curElem) => {
                return curElem.id === id + color
            })

            if (exitItem) {
                let updateexiestItem = state.Cart.map((curElem) => {
                    if (curElem.id === id + color) {
                        let newItem = curElem.amount + amount;

                        if (newItem >= curElem.max) {
                            newItem = curElem.max
                        }
                        return {
                            ...curElem,
                            amount: newItem
                        }
                    }
                    else {
                        return curElem
                    }


                })

                return {
                    ...state,
                    Cart: updateexiestItem,
                }


            } else {




                let CartItem;

                CartItem = {
                    id: id + color,
                    image: product.image[0].url,
                    amount,
                    color,
                    name: product.name,
                    price: product.price,
                    max: product.stock,

                }



                return {
                    ...state,
                    Cart: [...state.Cart, CartItem]

                }
            }

        case "INCREASE":
            let setIncrease = state.Cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let newIcrease = curElem.amount + 1

                    if (newIcrease >= curElem.max) {
                        newIcrease = curElem.max
                    }
                    return {
                        ...curElem,
                        amount: newIcrease
                    }

                }
                return curElem
            })


            return {
                ...state,
                Cart: setIncrease,
            }


        case "Decrease":
            let setDecrease = state.Cart.map((curElem) => {
                if (curElem.id === action.payload) {
                    let newDecrease = curElem.amount - 1;

                    if (newDecrease <= 1) {
                        newDecrease = 1
                    }
                    return {
                        ...curElem,
                        amount: newDecrease,
                    }
                }
                return curElem
            })

            return {
                ...state,
                Cart: setDecrease
            }


        case "removeItem":
            let removeCart = state.Cart.filter((curElem) => curElem.id != action.payload)
            return {
                ...state,
                Cart: removeCart,
            }

        case "Allclear":
            return {
                ...state,
                Cart: []
            }

        case "CART_TOTAL_PRICE":
            let PriceData = state.Cart.reduce((initialVal, curElem) => {
                let { price, amount } = curElem
                initialVal = initialVal + price * amount
                return initialVal;
            }, 0)
            return {
                ...state,
                total_price: PriceData,
            }


        case "CART_TOTAL_ITEM":
            let totalItem = state.Cart.reduce((initialVal, curElem) => {
                let { amount } = curElem;
                initialVal = initialVal + amount
                return initialVal;
            }, 0)
            return {
                ...state,
                total_item: totalItem,
            }

        default:
            return state
    }


}

export default CartReducer