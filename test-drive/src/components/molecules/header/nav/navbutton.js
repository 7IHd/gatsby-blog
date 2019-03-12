import React from "react";
import { NavButton, NavButtonBar } from "./style";

export default class extends React.Component {
  render() {
    return (
      <NavButton
        onClick={this.props.onNavButtonClick}
        pose={this.props.isNavActive ? "visible" : "hidden"}
      >
        <NavButtonBar />
        <NavButtonBar />
        <NavButtonBar />
      </NavButton>
    );
  }
}
