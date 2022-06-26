import { legacy_createStore as createStore } from 'redux'
import  { productReducer }  from './products'

const store = createStore(
    productReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store