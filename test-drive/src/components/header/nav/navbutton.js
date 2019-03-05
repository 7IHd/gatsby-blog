import React from "react";
import styled from "styled-components";
import posed from "react-pose";

const navButtonProps = {
  visible: {
    delayChildren: 0,
    staggerChildren: 100,
    staggerDirection: -1
  },
  hidden: {
    delayChildren: 0,
    staggerChildren: 50,
    staggerDirection: -1
  }
};

const StyledNavButton = styled(posed.button(navButtonProps))`
  background-color: transparent;
  border-style: none;
  outline: none;
  right: 5rem;
  top: 3.2rem;
  width: 34px;
  display: block;
  cursor: pointer;
`;

const navButtonBarProps = {
  visible: {
    rotate: 90,
    width: "20%",
    height: "0.25em",
    "border-radius": "50px"
  },
  hidden: {
    rotate: 0,
    height: "0.05em",
    width: "100%"
  }
};

const StyledNavButtonBar = styled(posed.span(navButtonBarProps))`
  display: block;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 6px;
`;

export default class NavButton extends React.Component {
  render () {
    return (
      <StyledNavButton onClick={this.props.onNavButtonClick} pose={this.props.isNavActive ? "visible" : "hidden"}>
        <StyledNavButtonBar />
        <StyledNavButtonBar />
        <StyledNavButtonBar />
      </StyledNavButton>
    )
  }
}
