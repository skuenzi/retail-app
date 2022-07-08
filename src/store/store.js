import { compose, legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import  { productReducer }  from './products'
import { reducer, fetchProducts } from "./asyncActions";



const store = createStore(
    reducer, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    )

store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchProducts())

export default store