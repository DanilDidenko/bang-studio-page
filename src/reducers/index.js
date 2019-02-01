import { combineReducers } from "redux";

const initialState = {
  isOpen: false
};
const menuStateReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case "MENU_OPENED":
      return {
        ...state,
        isOpen: true
      }

    case "MENU_CLOSED":
      return {
        ...state,
        isOpen: false
      }

    default:
      return state

  }
  
};

const rootReducer = combineReducers({
 menu: menuStateReducer
});

export default rootReducer;
