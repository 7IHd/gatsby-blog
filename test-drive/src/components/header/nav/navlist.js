import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import posed from "react-pose";
import PropTypes from "prop-types";
import ContactModal from "../../modal/contact";

const StyledContact = styled.span`
  display: flex;
  height: 40px;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Roboto Cn", sans-serif;
  cursor: pointer;
`;

const StyledNavLink = styled(Link)`
  display: flex;
  height: 40px;
  color: #fff;
  font-weight: 400;
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
    display:inline-block;
    margin-right: 2em;
`;

export default class NavList extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  setDialogState = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { isNavActive } = this.props,
      { open } = this.state;

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
          <Navlist pose={isNavActive ? "visible" : "hidden"}>
            <StaticQueryNavList data={data} />
            <NavItem>
              <StyledContact onClick={this.setDialogState}>
                Contact
              </StyledContact>
            </NavItem>
            <ContactModal open={open} onContactClick={this.setDialogState} />
          </Navlist>
        )}
      />
    );
  }
}

const StaticQueryNavList = ({ data }) => {
  return <span>{_getNavItems(data)}</span>;
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
