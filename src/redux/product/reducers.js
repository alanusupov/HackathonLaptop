import {ADD_PRODUCT, DELETE_PRODUCT,GET_PRODUCT, UPDATE_PRODUCT} from './constants';

const initialState = {
  products: []
};

function ProductReducer(state = initialState, action){
  console.log(state, action);
  switch(action.type){
    case ADD_PRODUCT:
      return {...state, product: [...state.product,action.payload]}
    case GET_PRODUCT:
       return {...state, product: action.payload}
    case DELETE_PRODUCT:
      return {...state, product: state.product.filter(product => action.payload !== product.id)}
    case UPDATE_PRODUCT:
      return {...state, product: state.product.map(item => item.id === action.payload.id ? action.payload : item)}
    default: 
    return state
  }
}
export default ProductReducer;



