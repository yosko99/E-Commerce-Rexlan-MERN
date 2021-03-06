import { productListReducer, productListFilteredReducer, productDetailsReducer, subcategoryProductListReducer } from './reducers/productReducers';
import { categoryListReducer, subcategoryListReducer } from './reducers/categoryReducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { carouselListReducer } from './reducers/carouselReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  subcategoryProductList: subcategoryProductListReducer,
  productListFiltered: productListFilteredReducer,
  subcategoryList: subcategoryListReducer,
  productDetails: productDetailsReducer,
  carouselItems: carouselListReducer,
  categoryList: categoryListReducer,
  productList: productListReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
