import * as actionTypes from "./Type";        //importing all actions
import items from '../Components/data'



const Reducer = (state = items, action) => {
     
    

    switch (action.type) {
      case actionTypes.Filter_Data:

     
        const newItems = state.item.filter((e) => e.title === action.payload);
       


        return {
          
          item: newItems,

        }

    

                         

      default:
      
        return state;
    }
  };
  
  export default Reducer;