import React, { Component } from "react";
import Layout from "./CalendarTutor.layout";
class CalendarTutor extends Component {
  onPressItem = item => {
    const { navigation } = this.props;
    navigation.navigate("OfferScreen");
  };
  render() {
    return <Layout onPressItem={this.onPressItem} />;
  }
}
export default CalendarTutor;
