import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { StyledPageLayout } from "./styled-components"

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
    render={data => <StyledPageLayout>{children}</StyledPageLayout>}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
