import React from "react";
import styled from "styled-components";
import { PageLayout, StackLayout } from "@auth0/cosmos";
import posed from "react-pose";
import Logo from "../logo/logo";
import NavList from "../nav/nav";

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

const NavButton = styled(posed.button(navButtonProps))`
  background-color: transparent;
  border-style: none;
  outline: none;
  right: 5rem;
  top: 3.2rem;
  z-index: 100;
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

const NavButtonBar = styled(posed.span(navButtonBarProps))`
  display: block;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 6px;
`;

const StyledHeader = styled(PageLayout.Header)`
  max-width: 1220px;
  width: 100%;
  margin: 0px auto;
  padding: 0px 4rem;
  background: transparent;
  z-index: 100;
  padding-top: 100px;
`;

const StyledStackLayout = styled(StackLayout)`
  flex-wrap: nowrap;
`;

class Header extends React.Component {
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
      <StyledHeader>
        <StyledStackLayout
          gutter="none"
          alignment="start"
          distribution="spaceBetween"
        >
          <Logo />
          <StyledStackLayout
            gutter="none"
            alignment="start"
            distribution="spaceBetween"
          >
            <NavList isNavActive={isNavActive} />
            <NavButton
              onClick={this.toggleNav}
              pose={isNavActive ? "visible" : "hidden"}
            >
              <NavButtonBar />
              <NavButtonBar />
              <NavButtonBar />
            </NavButton>
          </StyledStackLayout>
        </StyledStackLayout>
      </StyledHeader>
    );
  }
}

export default Header;

// Sources:
// - https://dev.to/emmawedekind/reading-data-from-a-json-file-with-gatsby--graphql-58a2
// - https://www.gatsbyjs.org/docs/static-query/
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// - https://labs.voronianski.com/oceanic-next-color-scheme/
// - https://www.narative.co/
// - https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105
