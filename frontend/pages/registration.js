import { Provider } from "react-redux";
import MainRegistration from "../components/MainContainer/MainReg/MainRegistration";
import store from "../components/redux/redux-store.js";
import { useRouter } from "next/router";
import { cs, en, ru } from "../translations";
import MainContainer from "../components/MainContainer/MainContainer";

const registration = (props) => {
  const router = useRouter();

  const { locale } = router;

  let t = en;

  switch (locale) {
    case "ru":
      t = ru;
      break;
    case "en":
      t = en;
      break;
    case "cs":
      t = cs;
      break;
  }

  return (
    <Provider store={store}>
      <MainContainer title={"Registration"} description={"Registration page"}>
        <MainRegistration />
      </MainContainer>
    </Provider>
  );
};

export default registration;
