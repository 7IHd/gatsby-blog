import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import ContactModal from "../../modal/contact";
import {
  StyledNavLink,
  StyledContact,
  StyledNavItem,
  StyledNavList
} from "../../styled-components";

function _getNavItems(data) {
  const navItemArray = [];
  data.allHeaderJson.edges.forEach(element =>
    navItemArray.push(
      <StyledNavItem key={element.node.value}>
        <StyledNavLink to={element.node.path}>
          {element.node.value}
        </StyledNavLink>
      </StyledNavItem>
    )
  );
  return navItemArray;
}

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
          <StyledNavList pose={isNavActive ? "visible" : "hidden"}>
            <StaticQueryNavList data={data} />
            <StyledNavItem>
              <StyledContact onClick={this.setDialogState}>
                Contact
              </StyledContact>
            </StyledNavItem>
            <ContactModal open={open} onContactClick={this.setDialogState} />
          </StyledNavList>
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
