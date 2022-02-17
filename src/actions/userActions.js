import axios from 'axios';

const registration = (username, email, password) => async (dispatch) =>{
    try{
        const {data} = await axios.post('http://localhost:8080/api/user/registration', {username, email, password});
        dispatch({type: 'REGISTRATION_SUCCESS', payload: data});
        dispatch({type: 'LOGIN_SUCCESS', payload: data});
        localStorage.setItem('user', JSON.stringify(data));
    }
    catch(error){
        dispatch({type: 'REGISTRATION_FAIL', payload: error.response.data.message});
    }
}

const login = (username, password) => async (dispatch) =>{
    try{
        const {data} = await axios.post('http://localhost:8080/api/user/login', {username, password});
        dispatch({type: 'LOGIN_SUCCESS', payload: data});
        localStorage.setItem('user', JSON.stringify(data));
    }
    catch(error){
        dispatch({type: 'LOGIN_FAIL', payload: error.response.data.message});
    }
}

const logout = () => async (dispatch) =>{
    localStorage.removeItem('user');
    dispatch({type: 'LOGOUT'});
}

export {registration, login, logout}