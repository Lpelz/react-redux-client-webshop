import axios from 'axios';

const createOrder = (order) => async (dispatch, getState) =>{
    try{
        const user = getState().userLogin.user;
        const {data} = await axios.post('http://localhost:8080/api/order', order, {headers: {Authorization: 'Bearer ' + user.token}});
        dispatch({type: 'ORDER_CREATE_SUCCESS', payload: data});            

    }
    catch(error){}
}

export {createOrder}