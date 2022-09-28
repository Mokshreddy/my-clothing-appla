import React from "react"
import Navbar from "./components/Navbar"

import Body from "./components/Body"

import products from "./products"
// import Fake from "./components/Fake"

import Hero from "./components/Hero"
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
           
            <section className="items-list">
            {items}
            </section>
          
            
        </div>
    )
}


