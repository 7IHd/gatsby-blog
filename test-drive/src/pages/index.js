import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header/header";

const Container = styled.div`
  max-width: 1220px;
  display: block;
  margin: 0px auto;
  padding: 0px 4rem;
  background: transparent;
`;

const Wrapper = styled.div`
  height: calc(100vh - 140px);
  min-height: 440px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 100px;
`;

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <Container>
        <Wrapper>
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            return <div key={frontmatter.path}>{frontmatter.title}</div>;
          })}
        </Wrapper>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

export default IndexPage;
