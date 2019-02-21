import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Logo from "../logo/logo"
import PropTypes from "prop-types";

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

const Wayfinder = styled.nav`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 60px;
`;

const Header = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <Kimono>
          <Logo />
          <Wayfinder>
            <NavList>{_getNavItems(data)}</NavList>
          </Wayfinder>
        </Kimono>
      </Wrapper>
    </Container>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        allHeaderJson {
          edges {
            node {
              value
              path
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
);

function _getNavItems(data) {
  const headerElementArray = [];
  data.allHeaderJson.edges.forEach(element =>
    headerElementArray.push(
      <NavItem key={element.node.value}>{element.node.value}</NavItem>
    )
  );
  return headerElementArray;
}

Header.propTypes = {
  data: PropTypes.shape({
    allHeaderJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            value: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired
          }).isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};
