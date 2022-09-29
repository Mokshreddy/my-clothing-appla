import React ,{useState, useEffect}from 'react'
import axios from 'axios';

function BodyHeader() {

  const [products , setProducts] = useState([]);

    useEffect(function(){
           axios.get(`https://rainy-star.surge.sh/products.json`)
           .then(response => setProducts(response.data))
           .then(error => console.log(error))
    } , []);

  return (
    <div className='dropdown-background'>
       <h2 className='title'> Women's Tops</h2>
        <select className='dropdown'>
        {
          products.map((product => 
            <option value={product.index}>{product.size}</option>
        ))}
       </select>  
      </div>
  )
}

export default BodyHeader
