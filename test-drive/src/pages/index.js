import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header/header";
import { graphql, Link } from "gatsby";
import { PageLayout, RowLayout, ColumnLayout, List } from "@auth0/cosmos";
import SplitText from "react-pose-text";
import styled from "styled-components";
import pose from "react-pose";
import Foreground from "../components/sections/foreground";

const articleProps = {
  hoverable: true,
  hover: {
    x: 1,
    opacity: 0.8
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
  background-image: -webkit-repeating-radial-gradient(
    center center,
    rgba(158, 158, 158, 0.2),
    rgba(158, 158, 158, 0.2) 1px,
    transparent 1px,
    transparent 100%
  );
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
  font-size: 0.7rem;
  padding: 10px 10px;
  background: #65737e;
`;

const StyledList = styled(List)`
  background: transparent;
`;

const StyledContent = styled(PageLayout.Content)`
  max-width: 1220px;
  margin: 0px auto;
  
  padding: 0px 4rem;
`;

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <StyledContent>
        <RowLayout>
          <ColumnLayout gutter="small" distribution="1/3 1/3 1/3">
            <div> Left</div>
            <StyledList initialPose="exit" pose="enter">
              {edges.map(edge => {
                const { frontmatter } = edge.node;
                return (
                  <Article
                    key={frontmatter.path}
                    initialPose="exit"
                    pose="enter"
                  >
                    <StyledArticleLink to={frontmatter.path}>
                      <SplitText charPoses={charPoses}>
                        {frontmatter.title}
                      </SplitText>
                    </StyledArticleLink>
                  </Article>
                );
              })}
            </StyledList>
            <div>Right</div>
          </ColumnLayout>
        </RowLayout>
        <Foreground />
      </StyledContent>
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
