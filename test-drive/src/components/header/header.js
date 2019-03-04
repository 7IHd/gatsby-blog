import React from "react";
import styled from "styled-components";
import { PageLayout, StackLayout } from "@auth0/cosmos";
import Logo from "../logo/logo";
import NavList from "./nav/navlist";
import NavButton from "./nav/navbutton";

const StyledHeader = styled(PageLayout.Header)`
  max-width: 1220px;
  width: 100%;
  margin: 0px auto;
  padding: 0px 4rem;
  background: transparent;
  z-index: 100;
  padding-top: 100px;
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
      <StyledHeader>
        <StackLayout
          gutter="none"
          alignment="start"
          distribution="spaceBetween"
        >
          <Logo />
          <StackLayout
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
          </StackLayout>
        </StackLayout>
      </StyledHeader>
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
