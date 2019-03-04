import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import posed from "react-pose";
import PropTypes from "prop-types";

const StyledNavLink = styled(Link)`
  display: flex;
  height: 40px;
  color: #fff;
  font-weight: 300;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Roboto Cn", sans-serif;
`;

function _getNavItems(data) {
  const navItemArray = [];
  data.allHeaderJson.edges.forEach(element =>
    navItemArray.push(
      <NavItem key={element.node.value}>
        <StyledNavLink to={element.node.path}>
          {element.node.value}
        </StyledNavLink>
      </NavItem>
    )
  );
  return navItemArray;
}

const navListProps = {
  visible: {
    opacity: 1,
    delayChildren: 0,
    staggerChildren: 300,
    staggerDirection: -1
  },
  hidden: {
    opacity: 0,
    delayChildren: 0,
    staggerChildren: 150,
    staggerDirection: 1
  }
};

const Navlist = styled(posed.ul(navListProps))`
  list-style: none;
  display: block;
  margin: 0;
`;

const navItemProps = {
  hoverable: true,
  hover: {
    x: 2,
    opacity: 0.6
  },
  visible: {
    opacity: 1,
    applyAtStart: {
      y: 0
    }
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      y: -300
    }
  }
};

const NavItem = styled(posed.li(navItemProps))`
  margin-right: 60px;
  display: inline-block;

  &:last-child {
    margin-right: 40px;
  }
`;

export default class NavList extends React.Component {
  render() {
    const { isNavActive } = this.props;

    return (
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
        render={data => (
          <StaticQueryNavList data={data} isNavActive={isNavActive} />
        )}
      />
    );
  }
}

const StaticQueryNavList = ({ data, isNavActive }) => {
  return (
    <Navlist pose={isNavActive ? "visible" : "hidden"}>
      {_getNavItems(data)}
    </Navlist>
  );
};

StaticQueryNavList.propTypes = {
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
