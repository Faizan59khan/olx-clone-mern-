import * as actionTypes from "./Type";  //importing all actions




export const FilterData = (text) => {
   
 
  console.log(text)
 
   return{
    type: actionTypes.Filter_Data,
    payload: text
   }
  

};


