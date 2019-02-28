import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import Logo from "../logo/logo";
import NavList from "../nav/nav";
// Sources:
// - https://dev.to/emmawedekind/reading-data-from-a-json-file-with-gatsby--graphql-58a2
// - https://www.gatsbyjs.org/docs/static-query/
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// - https://labs.voronianski.com/oceanic-next-color-scheme/
// - https://www.narative.co/
// - https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105

const Container = styled.div`
  display: block;
  margin: 0px;
  padding: 0px;
`;

const Wrapper = styled.div`
  max-width: 1220px;
  display: block;
  margin: 0px auto;
  padding: 0px 4rem;
  background: transparent;
`;

const Kimono = styled.div`
  position: relative;
  z-index: 100;
  padding-top: 100px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const navButtonProps = {
  visible: {
    delayChildren: 200,
    staggerChildren: 60,
    staggerDirection: -1
  },
  hidden: {
    delayChildren: 200,
    staggerChildren: 60,
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
    width: "10%",
    height: "5px"
  },
  hidden: {
    rotate: 0,
    height: "1px",
    applyAtStart: {
      width: "100%"
    }
  }
};

const NavButtonBar = styled(posed.span(navButtonBarProps))`
  display: block;
  height: 1px;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 6px;
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
      <Container>
        <Wrapper>
          <Kimono>
            <Logo />
            <Navigation>
              <NavList isNavActive={isNavActive} />
              <NavButton
                onClick={this.toggleNav}
                pose={isNavActive ? "visible" : "hidden"}
              >
                <NavButtonBar />
                <NavButtonBar />
                <NavButtonBar />
              </NavButton>
            </Navigation>
          </Kimono>
        </Wrapper>
      </Container>
    );
  }
}
