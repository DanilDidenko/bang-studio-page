import { combineReducers } from "redux";

const initialState = {
  popover: { isOpen: false, type: "menu" }
};
const popoverStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_OPENED":
      return {
        ...state,
        popover: { isOpen: true, type: "menu" }
      };

    case "FORM_OPENED":
      return {
        ...state,
        popover: { isOpen: true, type: "form" }
      };

    case "POPOVER_CLOSED":
      return {
        ...state,
        popover: { isOpen: false, type: "menu" }
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  popover: popoverStateReducer
});

export default rootReducer;
