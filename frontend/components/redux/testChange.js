import { useState } from "react";
import homeStyles from "../../styles/Home.module.css";

export default changeStyles = (toggle, style) => {
  // const [style, setStyle] = useState(styles.nav);

  if (!toggle) {
    setStyle(homeStyles.main_style1);
    setToggle(true);
  } else {
    setStyle(homeStyles.main);
    setToggle(false);
  }
  // switch (style){
  //   case (style==styles.nav):
  //     console.log("Style.nav");
  //   return setStyle(styles.nav_style1)
  //   case (style==styles.nav_style1):
  //     console.log("Style.nav_style1");
  //    return setStyle(styles.nav)
  //    default:
  //   return setStyle(styles.nav)
};

{
  children, title, toggle;
}
