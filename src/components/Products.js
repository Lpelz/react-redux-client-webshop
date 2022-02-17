import Product from './Product';
import {listProducts} from '../actions/productActions';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

function Products() {
  const productList = useSelector(state => state.productList);
  const {products} = productList;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
    {products.map(product => (
        <Product product = {product} key = {product._id}/>
    ))}
    </div>
  );
}

export default Products;