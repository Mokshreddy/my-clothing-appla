
import React from "react"

export default function Card(props) {
   let badgeText
   if (props.isSale === true) {
       badgeText = "SALE"
   } else if (props.isExclusive === true) {
       badgeText = "Exclusive"
   }
   
  
   return (
       <div className="card">
          {badgeText && <div className="card--badge">{badgeText}</div>}
          <img src= {`../images/${props.productImage}`}className="card--image" alt=""/>
           <div className="card--stats">
              
               <span>{props.size}</span>
               
               
           </div>
           <p>{props.productName}</p>
           <p><span className="bold">{props.price}</span> </p>
       </div>
   )
}

   

