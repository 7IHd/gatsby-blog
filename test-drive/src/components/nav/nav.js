// Sources
// - https://codepen.io/anon/pen/jdgNxZ?editors=1100
import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

// Sources:
// - https://dev.to/emmawedekind/reading-data-from-a-json-file-with-gatsby--graphql-58a2
// - https://www.gatsbyjs.org/docs/static-query/
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// - https://labs.voronianski.com/oceanic-next-color-scheme/
// - https://www.narative.co/

const NavList = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 60px;
  flex-basis: 20%;
  height: 100%;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  position: relative;
  top: 46%;
  color: #fff;
  text-transform: uppercase;
  font-family: "Roboto Cn", sans-serif;
  font-weight: 300;
  letter-spacing: 4px;
  text-decoration: none;
  display: block;
  text-align: center;
  font-size: 1rem;
  //opacity: 0;

  &:before {
    content: "";
    width: 70px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 100;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    opacity: 0;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  &:after {
    content: attr(data-content);
    font-size: 0.7rem;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    opacity: 0;
    position: absolute;
    z-index: 100;
    color: #fff;
    display: block;
    margin-right: auto;
    margin-left: auto;
    left: 0;
    right: 0;
    bottom: -50px;
    text-transform: none;
    font-family: "Open sans", sans-serif;
    font-weight: 300;
    font-style: italic;
    letter-spacing: 0;
  }

  &:hover:before,
  &:hover:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: crimson;
    left: 0;
    transform: scaleX(0);
    transition: all 0.5s;
  }
`;

function _getNavItems(data) {
  const navItemArray = [];
  data.allHeaderJson.edges.forEach(element =>
    navItemArray.push(
      <NavItem key={element.node.value}>
        <StyledLink to={element.node.path}>{element.node.value}</StyledLink>
      </NavItem>
    )
  );
  return navItemArray;
}

const Nav = ({ data }) => {
  return <NavList>{_getNavItems(data)}</NavList>;
};

export default props => (
  <StaticQuery
    query={graphql`
      query NavQuery {
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
    render={data => <Nav data={data} {...props} />}
  />
);

Nav.propTypes = {
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
