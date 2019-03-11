import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Contact from "../../modal/contact";
import { NavLink, ContactLink, NavItem, NavList } from "./style";

function _getNavItems(data) {
  const navItemArray = [];
  data.allHeaderJson.edges.forEach(element =>
    navItemArray.push(
      <NavItem key={element.node.value}>
        <NavLink to={element.node.path}>{element.node.value}</NavLink>
      </NavItem>
    )
  );
  return navItemArray;
}

export default class extends React.Component {
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
          <NavList pose={isNavActive ? "visible" : "hidden"}>
            <StaticQueryNavList data={data} />
            <NavItem>
              <ContactLink onClick={this.setDialogState}>Contact</ContactLink>
            </NavItem>
            <Contact open={open} onContactClick={this.setDialogState} />
          </NavList>
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
