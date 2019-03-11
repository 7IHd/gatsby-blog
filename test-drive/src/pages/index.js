import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Header from "../components/header/header";
import { graphql } from "gatsby";
import { ColumnLayout } from "@auth0/cosmos";
import Footer from "../components/footer/footer";
import { Content, Row, ListColor } from "../components/layout/style";
import { HeadingColor } from "../components/heading/style";
import { ParallaxColor, ParallaxImage } from "../components/parallax/style";
import Ghost from "../components/button/ghost";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <Content>
        <Row gutter="none">
          <ParallaxImage className="bgImage">
            <ColumnLayout
              className="heroColumn"
              gutter="small"
              distribution="2/3 1/3"
            >
              <div className="leftHeroColumn" />
              <ListColor
                className="rightHeroColumn"
                initialPose="exit"
                pose="enter"
              >
                <HeadingColor
                  className="rightHeroColumnHeading"
                  size={3}
                  font-style="italic"
                >
                  Recent Posts
                </HeadingColor>
                {edges.map(edge => {
                  const { title, path } = edge.node.frontmatter;
                  return <Ghost key={title} text={title} path={path} />;
                })}
              </ListColor>
            </ColumnLayout>
          </ParallaxImage>
          <ParallaxColor />
        </Row>
      </Content>
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
