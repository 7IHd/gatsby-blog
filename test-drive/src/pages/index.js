import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header/header";
import { graphql, Link } from "gatsby";
import {
  PageLayout,
  RowLayout,
  ColumnLayout,
  StackLayout,
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
  border-radius: 10px;
  border: 1px solid #fff;
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
  margin: -2.8em auto 0px auto;
  width: 100%;
  background-color: #4f5b66;
`;

const StyledRowLayout = styled(RowLayout)`
  > div {
    height: 100vh;
  }
  > div {
    > div {
      height: 100%;
    }
  }
`;

const StyledColumnLayout = styled(ColumnLayout)`
  height: 100%;
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
        <StyledRowLayout gutter="none">
          <StyledBackgroundSection className="bgImage">
            <StyledColumnLayout gutter="small" distribution="2/3 1/3">
              <div/>
              <StyledList initialPose="exit" pose="enter">
                <StyledHeading size={3}>Recent Posts</StyledHeading>
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
            </StyledColumnLayout>
          </StyledBackgroundSection>
          {/*<Foreground />*/}
        </StyledRowLayout>
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
