function productListReducer(state = {products: []}, action){
    switch(action.type){
        case 'PRODUCT_LIST_SUCCESS':
            return {products: action.payload};
        default: return state;
    }
}

export{productListReducer}