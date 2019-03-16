import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ParallaxImage, ParallaxColor } from "./style";
import { Row } from "layout/style";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const ParallaxSatellite = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        satelliteImage: file(relativePath: { eq: "satellite.jpg" }) {
          childImageSharp {
            fluid(
              duotone: { highlight: "#0ec4f1", shadow: "#6699CC", opacity: 35 }
              maxWidth: 1800
              cropFocus: WEST
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const { fluid } = data.satelliteImage.childImageSharp;

      return (
        <ParallaxImage className={className} fluid={fluid} children={children}>
          {children}
        </ParallaxImage>
      );
    }}
  />
);

const ParallaxType = function({ className, fluid, backgroundColor, children }) {
  return !!backgroundColor ? (
    <ParallaxColor className={className} backgroundColor={backgroundColor}>
      {children}
    </ParallaxColor>
  ) : (
    <ParallaxSatellite
      className={className}
      fluid={fluid}
      children={children}
    />
  );
};

export default class Parallax extends React.Component {
  render() {
    const { props } = this;
    return (
      <Row gutter="none">
        <ParallaxType {...props} />
      </Row>
    );
  }
}

export { Parallax };

// Sources:
// - https://github.com/gatsbyjs/gatsby/issues/2470
// - https://using-gatsby-image.gatsbyjs.org/prefer-webp/
// - https://github.com/bfred-it/object-fit-images
