import { createStackNavigator } from "react-navigation-stack";
import SubjectNotification from "../Screen/SubjectNotification";
const PedingSubjectStackNavigator = createStackNavigator(
  {
    SubjectNotification
  },
  {
    headerMode: "none"
  }
);
export default PedingSubjectStackNavigator;
