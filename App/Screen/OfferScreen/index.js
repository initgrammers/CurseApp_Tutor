import React, { Component } from "react";
import Layout from "./OfferScreen.layout";
export default class OfferScreen extends Component {
  onPressViewProfile = () => {
    const { navigation } = this.props;
    navigation.navigate("StudentProfile");
  };
  render() {
    return <Layout onPressViewProfile={this.onPressViewProfile} />;
  }
}
