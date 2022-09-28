import React, { Component } from 'react'
import products from '../products'


export default class BodyHeader extends Component {
  render() {
    return (
      
      <div className='dropdown-background'>
       
        <h2 className='title'> Women's Tops</h2>
       
       <select className='dropdown'>
        
            <option  >---Select Tops--- </option>
            {
              products.map((result)=>(<option text ={result.index}>{result.size}</option>))
            }
        </select>
        
      </div>
    )
  }
}

