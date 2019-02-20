import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const LayoutBody = styled.div`
  margin: 0;
  padding: 0;
  background: #343D46;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  height: 100%;
  min-height: 100%;
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
    render={data => (
        <LayoutBody>{children}</LayoutBody>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
