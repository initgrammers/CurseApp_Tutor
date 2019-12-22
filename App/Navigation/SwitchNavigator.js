import { createSwitchNavigator } from "react-navigation";
import SubjectBottomTabNavigator from "./SubjectBottomTabNavigator";
import Login from "../Screen/Login";
const SwitchWithLogin = createSwitchNavigator(
  {
    Login,
    SubjectBottomTabNavigator
  },
  {
    initialRouteName: "Login"
  }
);
export default SwitchWithLogin;
