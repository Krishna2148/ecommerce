const initialData = {
    items: [],
}

const itemReducer = (state = initialData, action)=>{
    return {...state, items: action.payload}
}

export default itemReducer