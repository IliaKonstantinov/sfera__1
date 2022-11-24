import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import MainContainer from "../components/MainContainer/MainContainer";
import MainRegistration from "../components/MainContainer/MainReg/MainRegistration";
import store from "../components/redux/redux-store";
import { Provider } from "react-redux";

jest.mock('next/router', () => require('next-router-mock'));

describe("Components", () => {
  it("renders a component", () => {
    render(<Home />);
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
  // it("renders a main component", () => {
  //   render(<MainContainer />);
  //   expect(screen.getByTestId("header")).toBeInTheDocument();
  // });
   it("renders a reg component", () => {
     render(
       <Provider store={store}>
         <MainRegistration />
       </Provider>
     );
     expect(screen.getByTestId("registration")).toBeInTheDocument();
   });
  
});