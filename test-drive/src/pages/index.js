import React from "react";
import { graphql } from "gatsby";
import SEO from "core/seo";
import Layout from "layout/layout";
import { Content, ListColor, Card, Stack } from "layout/style";
import { Gallery } from "layout/style";
import { Parallax } from "molecules/parallax/parallax";
import Header from "molecules/header/header";
import Footer from "molecules/footer/footer";
import { HeadingColor } from "atoms/heading/style";
import * as R from "ramda";

const _getHtml = function(edge) {
  const { html } = edge.node;
  return html;
};

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  console.log(edges);
  const extractedHtml = R.map(_getHtml, edges);

  console.log(extractedHtml);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <Parallax className="firstOne">
        {/*The size property needs to be media dependent*/}

        <Gallery>
          <Card className="leftHeroColumn" initialPose="exit" pose="enter">
            <HeadingColor
              className="rightHeroColumnHeading"
              size={1}
              font-style="italic"
            >
              Recent Posts
            </HeadingColor>
            <div dangerouslySetInnerHTML={{ __html: extractedHtml[0] }} />
          </Card>
        </Gallery>
      </Parallax>
      <Parallax
        className="secondOne"
        backgroundColor={props => props.theme.color.darkGray.primary}
      >
        <Gallery>
          <Card className="rightHeroColumn" initialPose="exit" pose="enter">
            <HeadingColor
              className="rightHeroColumnHeading"
              size={1}
              font-style="italic"
            >
              Recent Posts
            </HeadingColor>
            <div dangerouslySetInnerHTML={{ __html: extractedHtml[0] }} />
          </Card>
          <Card className="rightHeroColumn2" initialPose="exit" pose="enter">
            <HeadingColor
              className="rightHeroColumnHeading"
              size={1}
              font-style="italic"
            >
              Recent Posts
            </HeadingColor>
            <div dangerouslySetInnerHTML={{ __html: extractedHtml[0] }} />
          </Card>
        </Gallery>
      </Parallax>
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
