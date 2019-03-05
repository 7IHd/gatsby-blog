import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header/header";
import { graphql, Link } from "gatsby";
import {
  PageLayout,
  RowLayout,
  ColumnLayout,
  List,
  Heading
} from "@auth0/cosmos";
import pose from "react-pose";
import styled from "styled-components";
import Foreground from "../components/sections/foreground";
import StyledBackgroundSection from "../components/sections/styledbackground";
import Footer from "../components/footer/footer";

const articleProps = {
  hoverable: true,
  hover: {
    y: -8,
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

const Article = pose.div(articleProps);

const StyledArticleLink = styled(Link)`
  color: #fff;
  text-transform: uppercase;
  font-family: "Roboto Cn", sans-serif;
  font-weight: 900;
  letter-spacing: 4px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 0.7rem;
  padding: 30px 10px;
  background-color: #65737e;
  border-radius: 1rem;
`;

const StyledList = styled(List)`
  background-color: transparent;

  > li {
    border-top: 0px;
  }

  > li:hover {
    background-color: transparent;
  }
`;

const StyledContent = styled(PageLayout.Content)`
  margin: -2em auto 0px auto;
  width: 100%;
  padding: 0px 2rem;
  height: 100vh;
  background-color: #4F5B66;
`;

const StyledHeading = styled(Heading)`
  font-style: italic;
  color: #d8dee9;
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
            <StyledHeading size={1}>Left</StyledHeading>
            <StyledList initialPose="exit" pose="enter">
              {edges.map(edge => {
                const { frontmatter } = edge.node;
                return (
                  <Article
                    key={frontmatter.title}
                    initialPose="exit"
                    pose="enter"
                  >
                    <StyledArticleLink to={frontmatter.path}>
                      {frontmatter.title}
                    </StyledArticleLink>
                  </Article>
                );
              })}
            </StyledList>
            <StyledBackgroundSection className="bgImage">
              <StyledHeading size={1}>Hello</StyledHeading>
            </StyledBackgroundSection>
          </ColumnLayout>
        </RowLayout>
        <Foreground />
      </StyledContent>
      <Footer />
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

// Sources:
// - https://www.gatsbyjs.org/starters/?v=2
