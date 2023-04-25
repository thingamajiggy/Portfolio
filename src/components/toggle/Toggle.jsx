import "./toggle.css";
import Sun from "../../img/moon-gddccf60f2_1280.png";
import Moon from "../../img/sun-g15621ad67_1920.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
