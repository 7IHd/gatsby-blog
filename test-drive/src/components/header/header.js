import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Element = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  color: #99c794;
`;

function _getHeaderElements(data) {
  const headerElementArray = [];
  data.allHeaderJson.edges.forEach(element =>
    headerElementArray.push(<Element key={element.node.value}>{element.node.value}</Element>)
  );
  return headerElementArray;
}

const HeaderElements = ({ data }) => {
  return (
    <Header>
      {_getHeaderElements(data)}
    </Header>
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
    render={data => <HeaderElements data={data} {...props} />}
  />
);


HeaderElements.propTypes = {
  data: PropTypes.shape({
    allHeaderJson: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          value: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired
        }).isRequired
      })).isRequired
    }).isRequired
  }).isRequired
};

