
// action types

const ActionTypes = {
    SELECTED_PRODUCT: 'SELECTED_PRODUCT',
    REMOVE_SELECTED_PRODUCT: 'REMOVE_SELECTED_PRODUCT'
}

// actions

export const selectedProduct = product => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = product => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}



// reducer 

const selectedProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
    
        default:
            return state
    }
}
