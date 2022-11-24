import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginAPI } from "../pages/api/api"
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
   it("renders a reg component", () => {
     render(
       <Provider store={store}>
         <MainRegistration />
       </Provider>
     );
     expect(screen.getByTestId("registration")).toBeInTheDocument();
   });
   it("api test", () => {
    LoginAPI.PostLogin({
      "email": "test@test.ru",
      "password": "123"
    }).then(data => {
      expect(data.length).toBeGreaterThan(0);
    })
    LoginAPI.Registration({
      "email": "test@test.ru",
      "password": "123"
    }).then(data => {
      expect(data.length).toBeGreaterThan(0);
    })
  })
  
});