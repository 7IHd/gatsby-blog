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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Logo = styled.div`
  display: flex;
  border: 1px solid #fff;
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
          <LogoPath d="M 0.0065918 0 V 8.62637 L 22.8961 24.7297 L 22.8948 16.0316 L 0.0065918 0 Z" />
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
