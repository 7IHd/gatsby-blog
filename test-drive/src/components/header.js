import { StaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              description
            }
          }
        }
      `}
      render={data => <div>{data.site.siteMetadata.description}</div>}
    />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
