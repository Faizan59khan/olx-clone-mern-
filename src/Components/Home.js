import React,{useState} from 'react';
import Additem from './Additem';
import { Link } from 'react-router-dom';
import Cover from '../images/c1.png'
import Add1 from '../images/a1.jpg'
import item from './data.js'
import { connect } from "react-redux";







function Home(props){
  
   
    
   
 
          
    
      const items=props;
      console.log(items)

     


    return (
      <React.Fragment>

        <div className="centre">
          <img src={Cover} className="img-fluid image" alt="Responsive image" />
        </div>

        <div style={{ marginTop: "25px" }} className="centre">
          <a href="#"><img src={Add1} className="img-fluid p10" alt="Responsive image" /></a>
        </div>





        <div className="home-page">
          <div className="add-list">

           
              { 
             
               <Additem items={items.items}/> 
               
              }
               
                




          </div>

          <button className="load-more fontb anim">
            Load More
         </button>
        </div>
      </React.Fragment>
    )

    
  
}


const mapStateToProps = (state) => {
  return {
    items: state.item.item,
  };
};


export default connect(mapStateToProps)(Home);
