import React from 'react'
import '../App.css';
import '../Props.css';
import { connect } from "react-redux";


const Additem = ({items}) => {
 
  return (
       
     items.map((item,key)=>{
       return (
        <div className="add-item" key={key}>


        <img src={item.img} className="poster" />
  
        <div className="title s17">{item.title}</div>
        <div className="tagline s15">{item.price}</div>
  
        <div className="ftr flex">
          <div className="location s12">{item.location}</div>
          <div className="stamp"></div>
  
        </div>
  
      </div>
       )
     })
    
  )
}


export default Additem;






 