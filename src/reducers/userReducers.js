function userRegistrationReducer(state = {}, action){
    switch(action.type){
        case 'REGISTRATION_SUCCESS':
            return {user: action.payload};
        case 'REGISTRATION_FAIL':
            return {error: action.payload};
        default: return state;
    }
}

function userLoginReducer(state = {}, action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {user: action.payload};
        case 'LOGIN_FAIL':
            return {error: action.payload}
        case 'LOGOUT':
            return {}
        default: return state;
    }
}

export{userRegistrationReducer, userLoginReducer}