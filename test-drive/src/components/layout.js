import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { PageLayout } from "@auth0/cosmos";
import styled from "styled-components";

const StyledPageLayout = styled(PageLayout)`
  overflow-x: hidden;
  background-color: #1b2b34;
  color: #d8dee9;
  font-family: "Roboto Cn", sans-serif;
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
    render={data => <StyledPageLayout>{children}</StyledPageLayout>}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
