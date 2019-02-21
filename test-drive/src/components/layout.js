import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const LayoutBody = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: #343d46;
  color: #d8dee9;
  font-weight: 400;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <LayoutBody>{children}</LayoutBody>}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
