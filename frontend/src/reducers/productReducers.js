const { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL
 } = require("../constants/productConstants");

 /* Returns state according to actions type*/
 /* Remember that products state must have a default value of an empty array.
    It can't be none, It'd generate an error*/
export const productListReducer = (state = { loading: true, products: [] }, action) =>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}