import { ADD_PRODUCT_DATA,ADD_WOMENS_DATA,ADD_MENS_DATA } from "./actiontypes"

const initstate={
    productsData:[],
    womensData:[],
    mensData:[]
}

export const productreducer=(state=initstate,{type,payload})=>{
  switch(type){
    case ADD_PRODUCT_DATA:
        return {
            ...state,productsData:payload
        }
    case ADD_MENS_DATA:
        return {
            ...state,mensData:payload
        }    
    case ADD_WOMENS_DATA:
        return {
            ...state,womensData:payload
        }
    default:
        return{
            ...state
        };
  }
}