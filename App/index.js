import React, { Component } from "react";
import AppNavigation from "./Navigation/";
import * as Font from "expo-font";
export default class AppEntry extends Component {
  state = {
    isLoading: true
  };
  async componentDidMount() {
    await Font.loadAsync({
      montserrat: require("./assets/fonts/Montserrat-Regular.ttf")
    });
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <></> : <AppNavigation />;
  }
}
