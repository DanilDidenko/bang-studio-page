import { combineReducers } from "redux";

const initialState = {
  popover: { isOpen: false, type: "menu" }
};

const portfolio = () => {
  return [
    {
      header: "Lawyers Office",
      text:
        "Корпоративынй сайт который был разработан для адвокатского фирмы в городе Херсон. <br /> При разработке сайта были учтены все пожелания клиента и использованы передовые технологии.",
      img: "./img/portfolio-image-1.png"
    },
    {
      header: "Lawyers Office",
      text: `Корпоративынй сайт который был разработан для адвокатского фирмы в городе Херсон.
      <br />
  При разработке сайта были учтены все пожелания клиента и использованы передовые технологии.`,
      img: "./img/portfolio-image-1.png"
    },
    {
      header: "Lawyers Office",
      text: `Корпоративынй сайт который был разработан для адвокатского фирмы в городе Херсон.
      <br />
  При разработке сайта были учтены все пожелания клиента и использованы передовые технологии.`,
      img: "./img/portfolio-image-1.png"
    }
  ];
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
  popover: popoverStateReducer,
  portfolio: portfolio
});

export default rootReducer;
