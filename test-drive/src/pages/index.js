import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Header from "../components/header/header";
import { graphql } from "gatsby";
import { Column } from "../components/layout/style";
import Footer from "../components/footer/footer";
import {
  StyledHeading,
  StyledArticle,
  StyledArticleLink,
  StyledList,
  StyledContent,
  StyledParallaxImage,
  StyledParallax
} from "../components/styled-components";

import { Row } from "../components/layout/style";
import { Ghost } from "../components/button/ghost";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <StyledContent>
        <Row gutter="none">
          <StyledParallaxImage className="bgImage">
            <Column gutter="small" distribution="2/3 1/3">
              <div />
              <StyledList initialPose="exit" pose="enter">
                <StyledHeading size={3} font-style="italic">
                  Recent Posts
                </StyledHeading>
                {edges.map(edge => {
                  const { title, path } = edge.node.frontmatter;
                  return <Ghost text={title} path={path} />;
                })}
              </StyledList>
            </Column>
          </StyledParallaxImage>
          <StyledParallax />
        </Row>
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
