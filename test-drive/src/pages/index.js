import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header/header";
import { graphql } from "gatsby";
import Footer from "../components/footer/footer";
import {
  StyledHeading,
  StyledArticle,
  StyledArticleLink,
  StyledList,
  StyledContent,
  StyledRowLayout,
  StyledColumnLayout,
  StyledParallaxImage,
  StyledParallax
} from "../components/styled-components";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <StyledContent>
        <StyledRowLayout gutter="none">
          <StyledParallaxImage className="bgImage">
            <StyledColumnLayout gutter="small" distribution="2/3 1/3">
              <div />
              <StyledList initialPose="exit" pose="enter">
                <StyledHeading size={3} font-style="italic">
                  Recent Posts
                </StyledHeading>
                {edges.map(edge => {
                  const { frontmatter } = edge.node;
                  return (
                    <StyledArticle
                      key={frontmatter.title}
                      initialPose="exit"
                      pose="enter"
                    >
                      <StyledArticleLink to={frontmatter.path}>
                        {frontmatter.title}
                      </StyledArticleLink>
                    </StyledArticle>
                  );
                })}
              </StyledList>
            </StyledColumnLayout>
          </StyledParallaxImage>
          <StyledParallax />
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
