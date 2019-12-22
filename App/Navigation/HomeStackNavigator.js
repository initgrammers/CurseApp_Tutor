import { createStackNavigator } from "react-navigation-stack";
import CalendarTutor from "../Screen/CalendarTutor";
import OfferScreen from "../Screen/OfferScreen";
import StudentProfile from "../Screen/StudentProfile";
const HomeStack = createStackNavigator(
  {
    CalendarTutor,
    OfferScreen,
    StudentProfile
  },
  {
    headerMode: "none"
  }
);
HomeStack.navigationOptions = ({ navigation }) => {
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  let tabBarVisible = routeName == "CalendarTutor" ? true : false;
  return {
    tabBarVisible
  };
};
export default HomeStack;
