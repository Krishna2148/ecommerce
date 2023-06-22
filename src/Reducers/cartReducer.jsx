const initialData = {
    cart_items: [],
    shipping_info: [],
}

const cartReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            {
                return { ...state, cart_items: [...state.cart_items, action.payload] }
            }
        case "REMOVE_FROM_CART":
            {
                return { ...state, cart_items: state.cart_items.filter(item => item.cart_id != action.payload) }
            }
        case "UPDATE_CART":
            {
                let new_item = action.payload
                return {
                    ...state, cart_items: state.cart_items.map(cart_item => {
                        if (cart_item.cart_id === new_item.cart_id) {
                            return new_item;
                        }
                        else {
                            return cart_item;
                        }
                    })
                }
            }
            case "UPDATE_CART_INC":
                {
                    let new_item = action.payload
                    return{
                        ...state,cart_items:state.cart_items.map(cart_item=>{
                            if(cart_item.cart_id === new_item.cart_id){
                                return new_item;
                            }
                            else{
                                return cart_item;
                            }
                        })
                    }
                }
                case "SAVE_SHIPPING_INFO":
                    return {}
    }
    return state
}

export default cartReducer