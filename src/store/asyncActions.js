import axios from "axios"

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST'
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsError = error => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: error
    }
}

export const fetchProducts = () => {
    return function(dispatch) {
      dispatch(fetchProductsRequest());
      const options = {
        method: "GET",
        url: "https://real-store.p.rapidapi.com/search/rock%20climbing",
        headers: {
          "X-RapidAPI-Key":
            "bdb6a7a06emsh71933c8f898c3afp1aa4c3jsn5b85ee1f5c34",
          "X-RapidAPI-Host": "real-store.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then((response) => {
          dispatch(fetchProductsSuccess(response.data.results));
        })
        .catch((error) => {
          dispatch(fetchProductsError(error));
        });
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state, 
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                loading: false,
                products: [],
                error: action.payload
            }
    
        default:
            break;
    }
}
