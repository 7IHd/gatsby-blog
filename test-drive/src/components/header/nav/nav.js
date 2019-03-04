import React from "react";
import { StackLayout } from "@auth0/cosmos";
import NavList from "./navlist";
import NavButton from "./navbutton";

export default class Nav extends React.component {
  constructor() {
    super();
    this.state = {
      isNavActive: false
    };
  }

  toggleNav = () => {
    this.setState({ isNavActive: !this.state.isNavActive });
  };

  render() {
    const { isNavActive } = this.state;
    return (
      <StackLayout gutter="none" alignment="start" distribution="spaceBetween">
        <NavList isNavActive={isNavActive} />
        <NavButton
          onNavButtonClick={this.toggleNav}
          isNavActive={isNavActive}
        />
      </StackLayout>
    );
  }
}
