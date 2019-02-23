import React from "react";
import styled from "styled-components";
import Logo from "../logo/logo";
import Nav from "../nav/nav";
import Hamburger from "../hamburger/hamburger";
// Sources:
// - https://dev.to/emmawedekind/reading-data-from-a-json-file-with-gatsby--graphql-58a2
// - https://www.gatsbyjs.org/docs/static-query/
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// - https://labs.voronianski.com/oceanic-next-color-scheme/
// - https://www.narative.co/

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

export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Kimono>
            <Logo />
            <Nav />
          </Kimono>
          <Hamburger />
        </Wrapper>
      </Container>
    );
  }
}
