import { changeStyle1, changeStyle2 } from "./redux/main-reducer";
import React from "react";
import { connect } from "react-redux";
import MainContainer from "./MainContainer";

const MainContainerCoonect = (props) => {
  return <MainContainer {...props} />;
};

let mapStateToProps = (state) => ({
  style: state.mainPage.style,
  toggleChangeStyle: state.mainPage.toggleChangeStyle,
});

export default connect(mapStateToProps, {
  changeStyle1,
  changeStyle2,
})(MainContainerCoonect);
