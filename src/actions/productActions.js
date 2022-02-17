import axios from 'axios';

const listProducts = () => async (dispatch) =>{
    try{
        const {data} = await axios.get('http://localhost:8080/api/product');
        dispatch({type: 'PRODUCT_LIST_SUCCESS', payload: data});
    }
    catch(error){}
}

export {listProducts}