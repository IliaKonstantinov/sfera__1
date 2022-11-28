import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, getByText, render, screen} from "@testing-library/react";
import { LoginAPI } from "../pages/api/api"
import MainContainer from "../components/MainContainer/MainContainer";
import MainRegistration from "../components/MainContainer/MainReg/MainRegistration";
import store from "../components/redux/redux-store";
import { Provider } from "react-redux";
import RegForm from "../components/MainContainer/MainReg/RegForm/RegForm";
import { act } from "react-dom/test-utils";
import Login from "../components/MainContainer/MainLogin/Login/Login";

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
      // LoginAPI.Registration({
      //   "email": "test@test.ru",
      //   "password": "1234"
      // }).then(data => {
      //   console.log(data)
      //   expect(data.length).toBeGreaterThan(0);
      // })
     LoginAPI.PostLogin({
      "email": "123@",
      "password": "1234"
    }).then(data => {
      expect(data.length).toBeGreaterThan(0);
    })
   })
  
});

describe("test forms", () => {
  it("renders a error RegForm", async () => {
    // const emailInput = screen.getByTestId("email");
    const mockSubmit = jest.fn()
    render(
      <Provider store={store}>
        <RegForm />
      </Provider>
    );

    await act(async () => {
      fireEvent.change(screen.getByTestId("email"), {target: {value: '123'}})
      fireEvent.change(screen.getByTestId("password"), {target: {value: '123'}})
    })

    await act(async () => {
      fireEvent.submit(screen.getByTestId("submit"));
    })
  
    expect(screen.getAllByTestId("error").length).toBeGreaterThan(0);
  });
  it("renders a error Login", async () => {
    // const emailInput = screen.getByTestId("email");
    const mockSubmit = jest.fn()
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    await act(async () => {
      fireEvent.change(screen.getByTestId("email"), {target: {value: '123'}})
      fireEvent.change(screen.getByTestId("password"), {target: {value: '123'}})
    })

    await act(async () => {
      fireEvent.submit(screen.getByTestId("submit"));
    })
  
    expect(screen.getAllByTestId("error").length).toBeGreaterThan(0);
  });
})