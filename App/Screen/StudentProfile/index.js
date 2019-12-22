import React, { Component } from "react";
import Layout from "./StudentProfile.layout";
export default class StudentProfile extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return <Layout goBack={this.goBack} />;
  }
}
