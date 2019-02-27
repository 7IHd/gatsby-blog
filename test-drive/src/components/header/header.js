import React from "react";
import styled, { css, keyframes } from "styled-components";
import Logo from "../logo/logo";
import NavList from "../nav/nav";
import Hamburger from "../hamburger/hamburger";
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

const displayNav = keyframes`
  from {
    visibility: hidden;
  }

  to {
    visibility: visible;
  }
`;

const hideNav = keyframes`
  from {
    visibility: visible;
  }

  to {
    visibility: hidden;
  }
`;


const animateToDisplay = css`
  animation: ${displayNav} 0.15s linear;
  visibility: visible;
`;

const animateToHide = css`
  animation: ${hideNav} 0.15s linear;
  visibility: hidden;
`;

const Navigation = styled.nav`
  align-items: center;
  display: flex;
  ${props => (props.isActive ? animateToDisplay : animateToHide)}
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavActive: false
    };
  }

  toggleNav = () => {
    this.setState({isNavActive: !this.state.isNavActive})
  };

  render() {
    const { isNavActive } = this.state;
    return (
      <Container>
        <Wrapper>
          <Kimono>
            <Logo />
            <Navigation isActive={isNavActive}> <NavList/> </Navigation>
            <div onClick={this.toggleNav}><Hamburger /></div>
          </Kimono>
        </Wrapper>
      </Container>
    );
  }
}
