import React from "react"
import Navbar from "./components/Navbar"

import Body from "./components/Body"

import products from "./products"


import Hero from "./components/Hero"
import BodyHeader from "./components/BodyHeader"
console.log(products)
 
export default function App() {
      
    const items = products.map(item => {
     return (
            <Body
                key ={item.index}
                {...item}
            />
        )
    })
  

    return (
        <div>

            <Navbar />
            
            <Hero/>
            <BodyHeader/>
           
            <section className="items-list">
            {items}
            </section>
          
            
        </div>
    )
}


