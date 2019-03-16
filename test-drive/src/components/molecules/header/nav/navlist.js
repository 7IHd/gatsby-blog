import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Contact from "molecules/modal/contact";
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
    this.state = {
      open: false,
      loading: false,
      success: false
    };
  }

  setContactState = () => {
    this.setState({ open: !this.state.open });
  };

  setSubmitState = () => {
    const dis = this;
    dis.setState({
      loading: true
    });

    setTimeout(function() {
      dis.setState({
        loading: false,
        success: true
      });
    }, 3000);
  };

  render() {
    const { isNavActive } = this.props,
      { open, loading, success } = this.state;

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
              <ContactLink onClick={this.setContactState}>Contact</ContactLink>
            </NavItem>
            <Contact
              open={open}
              loading={loading}
              success={success}
              onCloseClick={this.setContactState}
              onSubmitClick={this.setSubmitState}
            />
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
