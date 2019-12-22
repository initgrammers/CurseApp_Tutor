import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import PedingSubjectStackNavigator from "./PendingSubjectStackNavigator";
import { Ionicons } from "@expo/vector-icons";
const SubjectBottomTabNavigator = createBottomTabNavigator(
  {
    HomeStackNavigator: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={28} />
        )
      }
    },
    SubjectNotification: {
      screen: PedingSubjectStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-notifications" color={tintColor} size={28} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);
export default SubjectBottomTabNavigator;
