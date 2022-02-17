function orderCreateReducer(state = {}, action){
    switch(action.type){
        case 'ORDER_CREATE_SUCCESS':
            return {order: action.payload};
        default: return state;
    }
}

export{orderCreateReducer}