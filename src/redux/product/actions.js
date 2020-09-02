import {ADD_PRODUCT, GET_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from './constants';

export const getProduct = (data) =>{
  return({
    type: GET_PRODUCT,
    payload: data
  })
}

export const addNewProduct = (newProduct) =>{
  return({
    type: ADD_PRODUCT,
    payload: newProduct
  })
}
export const deleteContact = (id) => {
  return({
    type: DELETE_PRODUCT,
    payload: id
  })
}
export const updateProduct = (data)=>{
  return({
    type:UPDATE_PRODUCT,
    payload: data
  })
}