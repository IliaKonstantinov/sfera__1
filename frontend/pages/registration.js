import MainContainerConnect from "../components/MainContainerConnect";
import { Provider } from "react-redux";
import MainRegistration from "../components/MainRegistration";
import store from "../components/redux/redux-store.js";
import { useRouter } from "next/router";
import { en, ru } from "../translations";

const registration = (props) => {

  const router = useRouter();

  const { locale } = router;

  let t = en;

  switch(locale){
    case "ru":
      t = ru;
      break;
    case "en":
      t = en;
      break;
  }

  return (
    <Provider store={store}>
      <MainContainerConnect title="Registration">
        <MainRegistration />
      </MainContainerConnect>
    </Provider>
  );
};

export default registration;
