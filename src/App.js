import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './components/share/Product';
import {add,remove} from './redux/action';


function App() {

  const products = useSelector(store => store.porducts);
  const dispatch =useDispatch()

  // useEffect(() => {
  //   async function fetchData() {
  //     let response = await fetch('https://fakestoreapi.com/products');
  //     let pds = await response.json();
  //     dispatch(add(pds))
  //   }
  //    fetchData()
  // }, [])

  return (
    <div className='container'>
      <div className='row'>
      {
        products.map(p => <Product key={p.id} product={p} />)
      }
      </div>
    </div>
  )
}

export default App;