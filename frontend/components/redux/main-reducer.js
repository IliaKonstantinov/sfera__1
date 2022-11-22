const SET_STYLE1 = "SET_STYLE1";
const SET_STYLE2 = "SET_STYLE2";

let initialState = {
  style: "style1",
  toggleChangeStyle: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STYLE1: {
      return { ...state, style: "style2", toggleChangeStyle: true };
    }
    case SET_STYLE2: {
      return { ...state, style: "style1", toggleChangeStyle: false };
    }
    default:
      return state;
  }
};

export const changeStyle1 = () => ({
  type: "SET_STYLE1",
});
export const changeStyle2 = () => ({
  type: "SET_STYLE2",
});

export default mainReducer;
