import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

// Sources:
// - https://dev.to/emmawedekind/reading-data-from-a-json-file-with-gatsby--graphql-58a2
// - https://www.gatsbyjs.org/docs/static-query/
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// - https://labs.voronianski.com/oceanic-next-color-scheme/
// - https://www.narative.co/

const Container = styled.div`
  display: block;
  max-width: 1220px;
  margin: 0px auto;
  padding: 0px 4rem;
`;

const Logo = styled.div`
  display: flex;
`;

// Read more: https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
const LogoPath = styled.path`
  stroke: #1b2b34;
  stroke-width: 1px;
  fill: #fff;
`;

const Item = styled.h4`
  font-family: "Roboto", sans-serif;
  color: #99c794;
`;

const Header = ({ data }) => {
  return (
    <Container>
      <Logo>
        <svg xmlns="http://www.w3.org/2000/svg">
          /* _ */
          <LogoPath d="M0 16H17.9091V20.4595H0V30Z" />
          /* | */
          <LogoPath d="M0.00598145 30.7176L7.01982 30.7873L7.01897 12.2965L0.00598145 10.3745V24.7176Z" />
          /* \ */
          <LogoPath d="M 0.0065918 0 V 8.62637 L 8.8961 16.7297 L 18.8948 17.0316 L 0.0065918 0 Z" />
        </svg>
      </Logo>
      {_getHeaderElements(data)}
    </Container>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
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
    render={data => <Header data={data} {...props} />}
  />
);

function _getHeaderElements(data) {
  const headerElementArray = [];
  data.allHeaderJson.edges.forEach(element =>
    headerElementArray.push(
      <Item key={element.node.value}>{element.node.value}</Item>
    )
  );
  return headerElementArray;
}

Header.propTypes = {
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
