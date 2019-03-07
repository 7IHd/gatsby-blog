import React from "react";
import styled from "styled-components";
import { PageLayout, StackLayout } from "@auth0/cosmos";
import Logo from "../logo/logo";
import NavList from "./nav/navlist";
import NavButton from "./nav/navbutton";
import Headroom from "react-headroom";

const StyledStackLayout = styled(StackLayout)`
  flex-wrap: nowrap;
`;

export default class Header extends React.Component {
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
      <Headroom
        style={{
          width: "100%",
          margin: "0px auto",
          padding: "0px 2rem",
          paddingTop: "2em",
          boxShadow:
            "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
          zIndex: "20",
          backgroundColor: "#1b2b34"
        }}
      >
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
            {/*TODO Figure out why Nav component fails to compile...*/}
            <NavList isNavActive={isNavActive} />
            <NavButton
              onNavButtonClick={this.toggleNav}
              isNavActive={isNavActive}
            />
          </StyledStackLayout>
        </StyledStackLayout>
      </Headroom>
    );
  }
}

// Sources:
// - https://dev.to/emmawedekind/reading-data-from-a-json-file-with-gatsby--graphql-58a2
// - https://www.gatsbyjs.org/docs/static-query/
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// - https://labs.voronianski.com/oceanic-next-color-scheme/
// - https://www.narative.co/
// - https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105

// Sources
// - https://codepen.io/anon/pen/jdgNxZ?editors=1100
// - https://dev.to/emmawedekind/reading-data-from-a-json-file-with-gatsby--graphql-58a2
// - https://www.gatsbyjs.org/docs/static-query/
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// - https://labs.voronianski.com/oceanic-next-color-scheme/
// - https://www.narative.co/
