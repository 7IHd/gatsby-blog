import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { PageLayout } from "@auth0/cosmos";
import styled from "styled-components";

const StyledPageLayout = styled(PageLayout)`
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
    render={data =>
      <StyledPageLayout>
          {children}
      </StyledPageLayout>}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
