import { combineReducers } from 'redux'


// action types

const ActionTypes = {
    SET_PRODUCTS: 'SET_PRODUCTS',
    SELECTED_PRODUCT: 'SELECTED_PRODUCT',
    REMOVE_SELECTED_PRODUCT: 'REMOVE_SELECTED_PRODUCT'
}

// actions

export const setProducts = products => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

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

const initialState = [{}]

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

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

// export const productReducers = combineReducers({
//     allProducts: productReducer,
//     product: selectedProductReducer
// })