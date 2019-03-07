import React from "react";
import { StyledNavButton, StyledNavButtonBar } from "../../styled-components";

export default class NavButton extends React.Component {
  render() {
    return (
      <StyledNavButton
        onClick={this.props.onNavButtonClick}
        pose={this.props.isNavActive ? "visible" : "hidden"}
      >
        <StyledNavButtonBar />
        <StyledNavButtonBar />
        <StyledNavButtonBar />
      </StyledNavButton>
    );
  }
}
