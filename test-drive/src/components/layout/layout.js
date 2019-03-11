import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Page } from "../layout/style";
import { theme } from "../theme";

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
      <ThemeProvider theme={theme}>
        <Page>{children}</Page>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
