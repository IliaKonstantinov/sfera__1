import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  style: "style1",
  toggleChangeStyle: false,
  user: null,
  stylesArray: [
    { value: "style1", id: "1" },
    { value: "style2", id: "2" },
  ],
  languagesArray: [
    { value: "ru", id: "1", text: "Русский" },
    { value: "en", id: "2", text: "English" },
    { value: "cs", id: "3", text: "Čeština" },
  ],
};

export const mainSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    changeStyle1: (state) => {
      state.style = "style2";
      state.toggleChangeStyle = true;
    },
    changeStyle2: (state) => {
      state.style = "style1";
      state.toggleChangeStyle = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { changeStyle1, changeStyle2, setUser } = mainSlice.actions;

export default mainSlice.reducer;
