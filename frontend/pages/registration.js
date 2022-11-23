import MainContainerConnect from "../components/MainContainerConnect";
import { Provider } from "react-redux";
import MainRegistration from "../components/MainRegistration";
import store from "../components/redux/redux-store.js";

const registration = (props) => {
  return (
    <Provider store={store}>
      <MainContainerConnect title="Registration">
        <MainRegistration />
      </MainContainerConnect>
    </Provider>
  );
};

export default registration;
