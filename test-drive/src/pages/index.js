import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import pose from "react-pose";
import SplitText from "react-pose-text";
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

const wrapperProps = {
  enter: {
    y: 0,
    opacity: 1,
    delayChildren: 0,
    staggerChildren: 0,
    staggerDirection: 1
  },
  exit: {
    y: -300,
    opacity: 0
  }
};

const Wrapper = styled(pose.div(wrapperProps))`
  height: calc(100vh - 140px);
  min-height: 440px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 100px;
  
  div:nth-child(1) {
    opacity: 0.8;
  }
`;

const articleProps = {
  hoverable: true,
  hover: {
    x: 2,
    opacity: 0.6
  },
  enter: {
    x: 0,
    y: 0,
    opacity: 1,
    delayChildren: 0,
    staggerChildren: 0,
    staggerDirection: 1
  },
  exit: {
    x: 300,
    y: 200,
    opacity: 0
  }
};

const Article = styled(pose.div(articleProps))`
    background-image: -webkit-repeating-radial-gradient(center center, rgba(158, 158, 158, 0.2), rgba(158, 158, 158, 0.2) 1px, transparent 1px, transparent 100%);
  background-size: 6px 6px;
  padding: 20px 20px;
  margin-left: -20px;
`;

const charPoses = {
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

const StyledArticleLink = styled(Link)`
  color: #fff;
  text-transform: uppercase;
  font-family: "Roboto Cn", sans-serif;
  font-weight: 300;
  letter-spacing: 4px;
  text-decoration: none;
  display: block;
  font-size: 0.8rem;
  padding: 20px 20px;
  background: #65737E;
`;

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <Container>
        <Wrapper initialPose="exit" pose="enter">
          <div />
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            return (
              <Article key={frontmatter.path} initialPose="exit" pose="enter">
                <StyledArticleLink to={frontmatter.path}>
                  <SplitText charPoses={charPoses}>
                    {frontmatter.title}
                  </SplitText>
                </StyledArticleLink>
              </Article>
            );
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
