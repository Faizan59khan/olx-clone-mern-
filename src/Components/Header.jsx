import React,{useState} from 'react';
import logo from '../images/23_OLX-512.png';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import item from './data.js'
import Additem from './Additem';
import { connect } from "react-redux";
import { FilterData } from "../Redux/Action.js";

function Header ({FilterData}){
 
 // const [items,setItems]=useState(item.item);
  const [searchItem,setSearchItem]=useState('');
 

    const nav = [
       {ID: 1,label:"Mobile Phones"},
       {ID: 2,label:"Cars"},
       {ID: 3,label:"Motercylcles"},
       {ID: 4,label:"Houses"},
       {ID: 5,label:"TV - Video - Audio"},
       {ID: 6,label:"Tablets"},
       {ID: 7,label:"Land & Plots"},
    ]


   

    return (
        <React.Fragment>
        <div className="header fixed flex aic">
           <div className="logo">
            <img src={logo}/>
          </div>
          <div className="location flex aic rel s16">
          <div className="ico"><SearchIcon/></div>
            <input type="text" className="s15 font label" placeholder="Pakistan"/>
            <button className="arro s24">
              <KeyboardArrowDownIcon/>
            </button>
        
          </div>
          <div className="search flex aic">

        
             <input type="text" className="s15 font query" placeholder="Find Cars, Mobile Phones and more..."
               onChange={(e)=>setSearchItem(e.target.value)}/>
             <button className="go s20 cff" onClick={()=>FilterData(searchItem)} >
             <SearchIcon/>
             </button>
          

          </div>
          <div className="actions flex aic">
            <Link to="/Signup" className="fontb s15" >Log in</Link>
            <button className="sell flex aic">
                <div className="s12 ico"><AddIcon/></div>
              <h2 className="s15 m7 fontb">Sell</h2>
            </button>
          </div>
        </div>
          
          <div className="hnav fixed flex aic">
               <button className="view-cates flex aic">
                   <h2 className="s16 m7 fontb color">All Categories</h2>
                   <button className="arro s15"><KeyboardArrowDownIcon/></button>
               </button>
               {
                 nav.map(item =>{
                    return(
                    <Link to={"/browser/"+item.ID} className="noul bl noulh color font s15">{item.label}</Link>
                    )
                 }
  
                 )
               }
          </div>
          <div className="space"></div>
       
         
        </React.Fragment>
    )
}








const mapDispatchToProps = (dispatch) => {
  return {
    FilterData: (text) => dispatch(FilterData(text)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);


